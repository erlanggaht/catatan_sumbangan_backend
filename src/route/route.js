import express from 'express'
import { homeAPI } from '../controllers/homeAPI_controller.js'
import Sign_Up from '../controllers/signup_controller.js'
import Sign_In from '../controllers/signin_controller.js'
import Add_Data from '../controllers/addData_controller.js'
import Get_Data from '../controllers/getData.controller.js'
import Get_Admin from '../controllers/getAdmin_controller.js'
import Delete_Data from '../controllers/delete_controller.js'
import jwt_auth from '../middleware/jwt_auth.js'

const {Register} = Sign_Up
const {Login} = Sign_In
const {AddData} = Add_Data 
const {GetData,GetData_Last} = Get_Data 
const {GetAdmin}  = Get_Admin 
const {delete_data} = Delete_Data

const router = express.Router()
router.get('/', homeAPI)
router.post('/signup',Register)
router.post ('/login',Login)
router.get('/getdata',GetData)
router.get('/getdata_last',GetData_Last)
router.post('/add_data',AddData)
router.post('/get_admin',jwt_auth,GetAdmin)
router.delete('/delete_data',delete_data)

export default router