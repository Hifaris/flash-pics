import React, { useEffect, useState } from 'react';
import useAuthStore from '../store/auth-store';
import { ShoppingCart, ImageDown, UserRound } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { currentUser, updateUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const [form, setForm] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({ firstName: '', lastName: '', email: '',password:"" });
  const navigate = useNavigate();

  useEffect(() => {
    getUser(token);
    // currentUser(token)
    

  }, [token]);

  const getUser = async (token) => {
    const resp = await currentUser(token);
    setForm(resp.data.member);
    setEditForm({ 
      firstName: resp.data.member.firstName,
      lastName: resp.data.member.lastName,
      email: resp.data.member.email
    });
  };

  const hdlCart = () => {
    navigate("/user/user/cart");
  };

  const hdlOrder = () => {
    navigate("/user/order");
  };

  const handleUpdateProfile = () => {
    setModalOpen(true); // Open modal when clicking "Update Profile"
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleFormChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  const handleConfirm = async () => {

    const resp = await updateUser(token,editForm)
    console.log(resp)
    
    handleCloseModal();
    // currentUser(token)
    getUser(token);
  };

  const name = user.email.split("@")[0];

  return (
    <div className='flex w-screen h-screen'>
      <aside className="w-[300px] bg-slate-600 text-white flex flex-col items-center gap-9 p-4">
        <div className="text-lg font-bold">Hello, {name}</div>
        <nav className='flex flex-col gap-3'>
          <div className='flex items-center gap-3 cursor-pointer'>
            <UserRound color="#ffffff" size={25} />
            <span>Profile</span>
          </div>
          <div className='flex items-center gap-3 cursor-pointer' onClick={hdlCart}>
            <ShoppingCart color="#ffffff" size={25} />
            <span>Cart</span>
          </div>
          <div className='flex items-center gap-3 cursor-pointer' onClick={hdlOrder}>
            <ImageDown color="#ffffff" size={25} />
            <span>Order</span>
          </div>
        </nav>
      </aside>

      <main className='flex-grow bg-gray-200 p-8'>
        <div className='max-w-2xl mx-auto'>
          <Card className="shadow-lg rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-sky-600">User Profile</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className='flex justify-between'>
                <span className='font-semibold'>Firstname:</span>
                <span>{form.firstName}</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-semibold'>Lastname:</span>
                <span>{form.lastName}</span>
              </div>
              <div className='flex justify-between'>
                <span className='font-semibold'>Email:</span>
                <span>{form.email}</span>
              </div>
            </CardContent>
            <CardFooter>
              <button 
                className='bg-orange-500 text-white rounded-lg px-4 py-2 hover:bg-orange-600 transition' 
                onClick={handleUpdateProfile}
              >
                Update Profile
              </button>
            </CardFooter>
          </Card>
        </div>
      </main>

      {/* Modal for updating profile */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-lg font-semibold mb-4">Update Profile</h2>
            <div className="flex flex-col gap-4">
              <label>
                Firstname:
                <input 
                  type="text" 
                  name="firstName" 
                  value={editForm.firstName} 
                  onChange={handleFormChange} 
                  className="border rounded-lg p-2 w-full"
                />
              </label>
              <label>
                Lastname:
                <input 
                  type="text" 
                  name="lastName" 
                  value={editForm.lastName} 
                  onChange={handleFormChange} 
                  className="border rounded-lg p-2 w-full"
                />
              </label>
              <label>
                Email:
                <input 
                  type="email" 
                  name="email" 
                  value={editForm.email} 
                  onChange={handleFormChange} 
                  className="border rounded-lg p-2 w-full"
                />
              </label>
              <label>
                Password:
                <input 
                  type="password" 
                  name="password" 
                  value={editForm.password} 
                  onChange={handleFormChange} 
                  className="border rounded-lg p-2 w-full"
                />
              </label>
              <div className="flex justify-end gap-4 mt-4">
                <button 
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition" 
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition" 
                  onClick={handleConfirm}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;