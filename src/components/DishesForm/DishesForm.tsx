import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import FormInput from "../FormInput/FormInput";
import CloseButton from "../UI/CloseButton/CloseButton";
import {createOne, editOne, fetchAll, fetchOne} from "../../store/Admin/Dishes/DishesThunk";
import {clearCurrentDish} from "../../store/Admin/Dishes/DishesSlice";
import ButtonSpinner from "../UI/ButtonSpinner/ButtonSpinner";
import Preloader from "../UI/Preloader/Preloader";

const initialState: TDishApi = {
  title: '',
  price: '',
  image: ''
}

const DishesForm = () => {
  const dispatch = useAppDispatch();
  const {
    currentDish,
    currentDishLoading,
    createOrEditDishLoading
  } = useAppSelector(state => state.dishes);

  const navigate = useNavigate();
  const { id } = useParams() as { id: string };

  const [inputsValue, setInputsValue] = useState<TDishApi>(initialState);

  useEffect(() => {
    if (id) dispatch(fetchOne(id)) ;

    return () => {
      dispatch(clearCurrentDish());
    }
  }, [id, dispatch]);

  useEffect(() => { if (currentDish) setInputsValue(currentDish) }, [currentDish]);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputsValue(prevState => ({ ...prevState, [name]: value }));
  };

  const sendData = async (e: React.FormEvent) => {
    e.preventDefault();

    if (inputsValue.title.length < 1) {
      alert('Enter the title');
    } else if (inputsValue.price === '') {
      alert('Enter the price');
    } else if (inputsValue.image.length < 1) {
      alert('Enter the image url');
    } else {
      if (!id) {
        await dispatch(createOne(inputsValue));
      } else {
        await dispatch(editOne({ id, editDish: inputsValue }));
      }

      await dispatch(fetchAll());
      navigate('/admin/dishes');
    }
  };

  return (
    <form
      onSubmit={sendData}
      className="
      position-fixed top-50 start-50 translate-middle
      d-flex flex-column gap-2
      bg-black rounded-4 p-4 pt-3"
      style={{ width: 400 }}
    >
      <h3 className="text-white">{id ? 'Edit' : 'Create'} Dish</h3>
      <CloseButton to="/admin/dishes" />

      <FormInput label="Title: " name="title" value={inputsValue.title} changeValue={changeValue} />
      <FormInput label="Price: " name="price" value={inputsValue.price} changeValue={changeValue} type="number" />
      <FormInput label="Image: " name="image" value={inputsValue.image} changeValue={changeValue} />

      <button
        className={`disabled-button
          btn btn-${id ? 'success' : 'primary'} 
          d-flex justify-content-center align-items-center gap-3
          mt-3 w-100
          `}
        disabled={createOrEditDishLoading}
      >
        {id ? 'Edit' : 'Create'}{createOrEditDishLoading ? <ButtonSpinner /> : null}
      </button>

      {currentDishLoading ? <Preloader /> : null}
    </form>
  );
};

export default DishesForm;