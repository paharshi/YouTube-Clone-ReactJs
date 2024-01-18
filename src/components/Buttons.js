import React from 'react';
import { useSelector } from 'react-redux';

const Buttons = ({name}) => {
  const Theme = useSelector(store => store.app.Theme)
  return (
    <div>
        <button className={`px-4 py-2 m-2 rounded-lg bg-gray-200 ${!Theme ? 'bg-gray-900 text-white':''}`}>{name}</button>
    </div>
  )
}

export default Buttons;
