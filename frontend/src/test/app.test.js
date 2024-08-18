import axios from "axios";
import login_mock from "../mock/login_mock";
import register_mock from "../mock/register_mock";
const backendURL = "http://localhost:5000"

describe('App Testing', () => { 
    it('GET /test | Test should work', async () => {
        const response = await axios.get(`${backendURL}/test`)
        expect(response.status).toBe(200)
      })
    
      //Register test
      it('POST /api/registerUser | Register Successfull', async () => {
        const response = await axios.post(`${backendURL}/api`, register_mock)
        expect(response.status).toBe(200);
        expect(response.data.success).toBe(true)
      })
    
      //Login Test 
      it('POST /api/users/auth | Login Successfull', async () => {
        const response = await axios.post(`${backendURL}/api/users/auth`, login_mock)
        expect(response.status).toBe(200);
        expect(response.data.success).toBe(true)
        expect(response.data.token).toBeDefined();
      })
 })