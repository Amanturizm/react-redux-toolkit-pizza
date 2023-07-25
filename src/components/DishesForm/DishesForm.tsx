import React, {useEffect, useState} from 'react';
import FormInput from "../FormInput/FormInput";
import CloseButton from "../CloseButton/CloseButton";
import {useAppDispatch, useAppSelector} from "../../app/hook";
import {createOne, editOne, fetchAll, fetchOne} from "../../store/Admin/AdminThunk";
import {useNavigate, useParams} from "react-router-dom";
import {clearCurrentDish} from "../../store/Admin/AdminSlice";

const initialState: TDishApi = {
  title: '',
  price: '',
  image: ''
}

const DishesForm = () => {
  const dispatch = useAppDispatch();
  const { currentDish } = useAppSelector(state => state.admin);

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

    if (!id) {
      await dispatch(createOne(inputsValue));
    } else {
      await dispatch(editOne({ id, editDish: inputsValue }));
    }

    await dispatch(fetchAll());
    navigate('/admin/dishes');
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

      <button className="btn btn-primary mt-3">{id ? 'Edit' : 'Create'}</button>
    </form>
  );
};

export default DishesForm;