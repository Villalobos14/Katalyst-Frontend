import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import axios from 'axios';

export default function Profile() {
  const token = JSON.parse(localStorage.getItem('token')) ?? JSON.parse(sessionStorage.getItem('token'));

  const [profile, setProfile] = useState({
    name: 'User Name',
    lastName: 'User Last Name',
    password: '************',
    newPassword: '************',
    weight: '40',
    height: '183'
  });

  useEffect(() => {
    const getProfile = async () => { 
        const response = await axios.get("http://34.197.57.0/users/profile", {
            headers: {
                'Authorization': token,
            },
        });

        const responseDataUser = response.data.data.user;

        setProfile({
            name: responseDataUser.name,
            lastName: responseDataUser.lastname,
            age: responseDataUser.age,
            height: responseDataUser.height,
            weight: responseDataUser.weight,
        });
    }

    getProfile();
  }, []);

  const handleSave = async () => {
    const name = profile.name.split(' ')[0];
    const lastName = profile.name.split(' ')[1];

    const response = await axios.patch("http://34.197.57.0/users/profile",{
        "name": name,
        "lastname": lastName,
        "oldPassword": profile.password,
        "newPassword": profile.newPassword,
        "weight": profile.weight,
        "height": profile.height,

        headers: {
            'Authorization': token,
        },
    });

    console.log(response.status);
  }

  return (
      <div className="relative">
          <nav className="bg-[url('/navbar.jpg')] h-72 w-full bg-cover object-center px-32 pt-12">
              <div className="flex w-full justify-between">
                  <div>
                      <Link
                          to="/dashboard"
                          className="bg-transparent text-[#FFF] text-center py-1.5 px-4 hover:duration-200 hover:scale-105 text-lg font-bold border-[1px] border-[#FFF] w-28 h-10 rounded-[30px]"
                      >
                          Back
                      </Link>
                  </div>
                  <div>
                      <img
                          src={Logo}
                          alt="logo-katalyst"
                          className="mt-5 w-auto h-12"
                      />
                  </div>
              </div>
          </nav>
          <img
              src="https://scontent.ftgz2-1.fna.fbcdn.net/v/t39.30808-6/366681108_2263897647140696_7729772342306175147_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gWDzdQVVKUwAb4cnMM6&_nc_ht=scontent.ftgz2-1.fna&oh=00_AfC-xlL2T3a-2mdClPCqk_UtyHZRVmOZ-stAMlirEuD_dQ&oe=66266EB4"
              alt="profilephoto"
              className="w-40 h-40 rounded-full bg-gray-300 absolute top-3/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover border-white border-4"
          />
          <main className="w-screen flex justify-center">
              <div className="mt-20 w-full justify-center flex flex-col">
                  <div className="text-center">
                      <h3 className="font-bold text-3xl font-raleway">
                          PROFILE
                      </h3>
                  </div>
                  <div className="mx-36 border-b-[0.01px] border-black mt-4" />
                  <div className="flex justify-center mx-36">
                      <div className="flex justify-around w-full mt-6">
                          <div className="flex flex-col">
                              <div>
                                  <h3 className="text-xl">Profile</h3>
                                  <div className="flex flex-col">
                                      <label
                                          htmlFor="name"
                                          className="text-gray-500 text-sm ml-6 mt-2"
                                      >
                                          Name
                                      </label>
                                      <input
                                          type="text"
                                          id="name"
                                          className="ml-6 border rounded-lg px-6 py-1 mt-2"
                                          placeholder={`${profile.name} ${profile.lastName}`}
                                          onChange={(e) =>
                                              setProfile({
                                                ...profile,
                                                name:e.target.value
                                              })
                                          }
                                      />
                                  </div>
                              </div>
                              <div>
                                  <h3 className="text-xl mt-3">Password</h3>
                                  <div className="flex flex-col">
                                      <label
                                          htmlFor="password"
                                          className="text-gray-500 text-sm ml-6 mt-2"
                                      >
                                          Old pasword
                                      </label>
                                      <input
                                          type="password"
                                          id="password"
                                          className="ml-6 border rounded-lg px-6 py-1 mt-2"
                                          placeholder="************"
                                          onChange={(e) =>
                                              setProfile({
                                                  ...profile,
                                                  password: e.target.value,
                                              })
                                          }
                                      />
                                  </div>
                              </div>
                              <div>
                                  <h3 className="text-xl mt-3">
                                      New or Confirm password
                                  </h3>
                                  <div className="flex flex-col">
                                      <label
                                          htmlFor="newpassword"
                                          className="text-gray-500 text-sm ml-6 mt-2"
                                      >
                                          password
                                      </label>
                                      <input
                                          type="password"
                                          id="newpassword"
                                          className="ml-6 border rounded-lg px-6 py-1 mt-2"
                                          placeholder="**************"
                                          onChange={(e) =>
                                              setProfile({
                                                  ...profile,
                                                  newPassword: e.target.value,
                                              })
                                          }
                                      />
                                  </div>
                              </div>
                          </div>
                          <div>
                              <div>
                                  <h3 className="text-xl">Weight</h3>
                                  <div className="flex flex-col">
                                      <input
                                          type="text"
                                          id="name"
                                          className="ml-6 border rounded-lg px-6 py-1 mt-9"
                                          placeholder={`${profile.weight} kg`}
                                          onChange={(e) =>
                                              setProfile({
                                                  ...profile,
                                                  weight: e.target.value,
                                              })
                                          }
                                      />
                                  </div>
                              </div>
                              <div>
                                  <h3 className="text-xl mt-3">Height</h3>
                                  <div className="flex flex-col">
                                      <input
                                          type="text"
                                          id="name"
                                          className="ml-6 border rounded-lg px-6 py-1 mt-9"
                                          placeholder={`${profile.height} cm`}
                                          onChange={(e) =>
                                              setProfile({
                                                  ...profile,
                                                  height: e.target.value,
                                              })
                                          }
                                      />
                                  </div>
                              </div>
                              <div>
                                  <div className="flex flex-col">
                                      <button
                                          type="text"
                                          id="name"
                                          className="ml-6 border rounded-lg px-6 py-1 mt-16 bg-[#527566] text-center  text-[#FFF] hover:duration-200 hover:scale-105 text-lg font-bold  h-10"
                                          onClick={handleSave}
                                      >
                                          Save
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </main>
      </div>
  );
}

