/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;
* Projeto iMessage Clone;
*/
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import chatReducer from '../features/chatSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    chat: chatReducer,
  },
});
