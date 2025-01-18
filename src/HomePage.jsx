import React, { useState } from "react";

//vghsgx41v_9updxfhmn_hn7hohwtw
const API_URL = "https://api.carsxe.com/specs?key=CARSXE_API_KEY&vin=vghsgx41v_9updxfhmn_hn7hohwtw"
const HomePage = () => {
  const [cars, setCars] = useState([]);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="mx-10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold text-red-600">Logo</div>
          <button className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-500">
            Sign Up
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-96 mx-10 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/pexels-brett-sayles-1682666.jpg')` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/40"></div>
        <div className="relative z-10 text-white">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-6">
            Find your next awesome vehicle
          </h1>
          <div className="bg-white/15 p-6 rounded-lg shadow-lg flex flex-wrap items-center space-x-4 text-white">
            <select className="flex-1 border bg-white/0 border-gray-400 rounded-lg px-4 py-2">
              <option className="border-none">Type</option>
              <option className="border-none">Used Car</option>
              <option className="border-none">New Car</option>
            </select>
            <select className="flex-1 border bg-white/0 border-gray-400 rounded-lg px-4 py-2">
              <option>Make</option>
              <option>Infiniti</option>
              <option>Hyundai</option>
            </select>
            <input
              type="text"
              placeholder="Model"
              className="flex-1 border bg-white/0 border-gray-400 rounded-lg px-4 py-2"
            />
            <input
              type="text"
              placeholder="Price"
              className="flex-1 border bg-white/0 border-gray-400 rounded-lg px-4 py-2"
            />
            <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500">
              Search
            </button>
          </div>
        </div>  
        </div>
      </div>
      <div className="mx-10">
        <div className="flex justify-evenly">
          <svg viewBox="0 0 192.756 192.756" xmlns="http://www.w3.org/2000/svg" fill="#000000" width='200px'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd" clip-rule="evenodd"> <path fill="#F9FAFB" d="M0 0h192.756v192.756H0V0z"></path> <path d="M24.037 110.41c-2.514-1.575-4.367-7.01-4.367-13.469 0-.237.001-.471.007-.704l.002.003c-6.994-1.099-12.047-4.11-12.177-7.672l-.02.042c-1.711 2.127-2.688 4.586-2.688 7.206 0 7.71 8.463 14.027 19.198 14.586l.045.008zM1.56 96.378c0-8.626 10.736-15.621 23.979-15.621 13.244 0 23.98 6.995 23.98 15.621 0 8.627-10.736 15.622-23.98 15.622-13.243 0-23.979-6.995-23.979-15.622zm23.98-13.367c2.557 0 4.732 3.879 5.538 9.291l.002-.009c4.975-.774 8.457-2.56 8.457-4.639 0-2.789-6.267-5.048-13.997-5.048-7.729 0-13.996 2.259-13.996 5.048 0 2.079 3.482 3.864 8.456 4.639l.003.009c.806-5.412 2.981-9.291 5.537-9.291zm1.548 27.39c10.735-.559 19.199-6.876 19.199-14.586 0-2.62-.978-5.079-2.688-7.206l-.021-.042c-.129 3.562-5.182 6.573-12.177 7.672l.003-.003c.005.233.007.467.007.704 0 6.459-1.854 11.894-4.367 13.469l.044-.008zM25.54 92.703a37.94 37.94 0 0 0 3.325-.142l-.001.001c-.53-3.468-1.818-5.917-3.323-5.917s-2.792 2.449-3.323 5.917l-.001-.001a38.27 38.27 0 0 0 3.323.142zm0 12.846c1.925 0 3.496-4.006 3.579-9.029l.01.003a39.115 39.115 0 0 1-7.177 0l.01-.003c.083 5.023 1.653 9.029 3.578 9.029zM123.922 96.378c0-6.593 5.346-11.939 11.939-11.939 6.596 0 11.941 5.346 11.941 11.939 0 6.595-5.346 11.939-11.941 11.939-6.593 0-11.939-5.344-11.939-11.939zm11.939 7.561c3.682 0 6.668-3.386 6.668-7.562 0-4.175-2.986-7.561-6.668-7.561s-6.666 3.386-6.666 7.561c0 4.177 2.985 7.562 6.666 7.562zM161.35 89.413v18.362h-5.032V89.413h.018-7.035v-4.151h19.066v4.151h-7.017zM174.453 102.71l-.004.005-1.93 5.061h-5.877l9.289-22.514h6.262l9.287 22.514h-5.875l-1.93-5.061-.006-.005H174.453zm4.609-3.8h3.166l-.002.001-3.143-8.24h-.043l-3.143 8.24-.002-.001h3.167zM68.617 89.413v18.362h-5.031V89.413h.018-7.036v-4.151h19.067v4.151h-7.018zM76.922 96.378c0-6.593 5.346-11.939 11.941-11.939 6.594 0 11.94 5.346 11.94 11.939 0 6.595-5.346 11.939-11.94 11.939-6.595 0-11.941-5.344-11.941-11.939zm11.941 7.561c3.681 0 6.667-3.386 6.667-7.562 0-4.175-2.986-7.561-6.667-7.561-3.682 0-6.667 3.386-6.667 7.561 0 4.177 2.985 7.562 6.667 7.562zM112.361 107.775h2.551v-8.548l8.777-13.965h-5.875l-5.453 9.463-5.451-9.463h-5.875l8.776 13.965v8.548h2.55z" fill="#bababa"></path> </g> </g></svg>
          <svg fill="#c7c7c7" width='100px' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 612.00 612.00" xml:space="preserve" stroke="#c7c7c7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M306,522.4c101.3,0,191.2-35.4,246.9-89.9l-50.2,0.2c-47.4,39.9-116.8,65-195.4,65c-146.7,0-261.1-87.4-261.1-195.2 c0-124.4,114.5-195.2,261.1-195.2c9.3,0,16.8,4.3,11.2,12.4C288,156.4,201.2,274.5,185.4,300.1c-31.2,50.4-30.5,112.5,46,116.9H553 c16.4,0,20.6-7.7,26.5-15.7c21.5-29.1,32.5-63.2,32.4-98.7c-0.1-92.7-65.3-162.1-161.2-196.3l-14.8,22.2 c79.7,29.4,132.4,88.9,132.4,174.1c0,14.8-2.2,29.2-6.3,43.1c-3.6,12-10.5,22.2-23.7,22.2H281.7c-32.9,0-20.2-33.9-8-50.4 c17.7-31.7,114.4-163.5,137.7-188.1c5.9-9,22.6-27.7-0.4-34.8c-32.7-7.8-68.1-11.8-105-11.8C137,82.7,0.1,169.5,0,302.5 C-0.1,436.8,137,522.4,306,522.4L306,522.4z"></path> </g> </g></svg>
          <svg fill="#c7c7c7" width='120px' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2500 2500" xml:space="preserve" stroke="#c7c7c7"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M911.4,925c-79.7,0-156.9,25.4-208.9,76.2c-52,50.7-78.2,120.9-78.2,210.6c0,189.6,140.2,287.7,303,287.7 c106.3,0,218.2-58.8,261.7-169.6h-158.6c-11.1,35.1-71.6,53.5-101.3,53.5c-36.5,0-67.2-11.8-91.8-35.5 c-24.6-23.5-37.3-56.6-38.4-99h398.6C1201.4,1047.3,1096.4,924.8,911.4,925z M792.4,1156.7c-0.3-39.2,10.7-70,32.9-92.7 c22.2-22.8,50.4-34.2,84.6-34.2c31.9,0,59.1,10.8,81.4,32.3c22.2,21.6,33.8,53.1,34.9,94.6H792.4z"></path> <path d="M1553.4,925.1c-79.7,0-156.9,25.4-208.9,76.2c-52,50.9-78.2,121-78.2,210.8c0,189.6,140,287.7,302.9,287.7 c106.3,0,218.2-58.8,261.7-169.6h-158.6c-11.1,35.1-71.6,53.5-101.3,53.5c-36.5,0-67.2-11.8-91.8-35.5 c-24.6-23.5-37.3-56.6-38.4-99h398.6C1843.1,1047.5,1738.3,925.1,1553.4,925.1z M1434.1,1156.9c-0.4-39.2,10.7-70,32.9-92.7 c22.2-22.8,50.4-34.2,84.6-34.2c32,0,59.1,10.8,81.4,32.3c22.2,21.5,33.8,53.1,34.9,94.6H1434.1z"></path> <path d="M358.2,1218.3c0,89.3-9.5,119.3-76,120.7c-106.7,2.2-82.7-72.7-86.4-148.4H9c0.4,165.2,67.1,318.7,251.1,315 c188.6-3.8,281.4-90.3,281.4-297.2V722.2H358.2V1218.3z"></path> <path d="M2248.5,916c-69.1,0-137.1,35.2-179.8,97.6v-79.5l-153.6,2.9v746.8l169.9,2.9v-272.6c50.4,49.8,103.2,84.8,171.3,84.8 c147.9,0,230.8-111,230.8-294.4C2487.1,1043.2,2393.7,916,2248.5,916z M2275.4,1336.6c-26.9,26.8-40.1,37.1-80.5,37.1 c-80.8,0-113.3-90.5-116.2-175.3c-2-62.4,29.1-160.5,113.1-160.5c40.9,0,54.7,13.7,82.3,41.1c27.8,27.5,41.8,69.6,41.8,126.4 C2315.9,1266.1,2302.3,1310,2275.4,1336.6z"></path> </g> </g></svg>
          <svg fill="#cfcfcf" width='70px' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 261.9 263.7" xml:space="preserve" stroke="#cfcfcf"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Layer_2"> </g> <g id="Layer_1"> <g> <path d="M220.2,23.5l-0.4-2.6l-2.4-1.1C205.2,14,172.2,0.8,128.8,0.8c-41,0-72.4,11.8-87.6,18.9l-2.4,1.1l-0.4,2.6 c-2.7,17.3-7.5,63.3,5.9,115.2c13.6,52.6,41.3,93.6,82.1,122.1l2.8,2l2.8-2c40.8-28.4,68.5-69.5,82.1-122.1 C227.7,86.8,222.9,40.8,220.2,23.5z M204.6,136.2c-12.7,49-38,87.4-75.3,114.4C92,223.6,66.7,185.1,54,136.2 c-12.4-47.7-8.8-90.1-6.1-108.5c15.1-6.8,43.9-16.8,80.9-16.8c38.8,0,68.8,11,82,16.8C213.4,46.1,217,88.5,204.6,136.2z"></path> <polygon points="59.5,48.7 65.4,46.5 66.2,48.6 57.8,51.8 53.5,39.9 55.9,39 "></polygon> <polygon points="96.1,41.3 93.7,41.8 91.7,31.4 91.6,31.4 91.3,42.2 88.8,42.7 84.5,32.8 84.5,32.8 86.5,43.2 84.1,43.6 81.7,31.2 85.5,30.5 89.6,39.8 89.6,39.8 89.9,29.6 93.7,28.9 "></polygon> <path d="M152.6,33.1l5.3,0.5l-0.7,6.8l-1.8-0.2l-0.1-1.6c-0.7,0.7-1.8,1.7-4.1,1.5c-3-0.3-5.6-2.8-5.1-7.2c0.4-3.4,2.6-6.5,6.8-6 c3.9,0.4,5.1,3.1,5.1,4.8l-2.6-0.3c0-0.5-0.7-2.2-2.5-2.4c-1.9-0.2-3.7,0.9-4.1,4.2c-0.4,3.4,1.4,4.5,3.2,4.7 c0.6,0.1,2.5,0,3.3-2.5l-2.9-0.3L152.6,33.1L152.6,33.1z"></path> <polygon points="165.1,36 164.1,41.6 161.5,41.1 163.8,28.6 166.4,29.1 165.5,33.8 170.4,34.7 171.2,30 173.8,30.4 171.6,42.9 169,42.5 170,36.9 "></polygon> <polygon points="178.6,44.6 176,44 179,31.6 181.5,32.2 "></polygon> <polygon points="194.1,35.8 196.5,36.5 192.8,48.6 190.3,47.9 188,37.7 188,37.7 185.3,46.4 183,45.6 186.7,33.5 189.3,34.3 191.6,44.2 191.6,44.2 "></polygon> <polygon points="199.5,51.1 197,50.2 201.5,38.3 204,39.3 "></polygon> <path d="M181.7,130c-2.3-0.7-4.9-2.1-8.1-5.5c0.2-1.5,0.3-2.5,0.2-3.4s-0.4-1.5-0.8-2.4c-0.4-0.9-0.9-1.7-1.2-3 c-0.3-1.3-0.5-3.1-0.2-6c0.3-2.9,0.2-7.6-1-12.7c-1.2-5.1-3.6-10.6-7.7-15.2c1.1-3.4,1.7-5.8,1.8-7.7c0.1-1.9-0.2-3.3-1-5 c-0.8-1.6-2.8-3-5.8-3.9c-3-0.9-6.9-1.4-11.4-1.4s-11,0.4-16.3,0.3c-5.3-0.1-9.6-0.5-9.6-1.9c0-1.4,0.7-2,1.7-2.4s2.3-0.4,3.3-0.5 c1.5,0.6,3.7,1,5.9,1.1c2.2,0.2,4.6,0.2,6.4,0.2c1.9,0,3.6-0.6,5.5-1.1c1.8-0.5,3.8-1.1,6-1.1c-1.9-0.6-4.3-1.5-6.8-2.2 c-2.5-0.7-5-1.1-7.1-0.6c-0.8-0.7-1.3-1.3-2.2-1.5c-0.9-0.2-2.1-0.2-4.1,0.4c-2,0.5-3.3,0.7-4.3,0.9c-1.1,0.1-1.9,0.2-3.2,0.5 c-1.3,0.3-3,0.5-4.4,1.2c-1.4,0.7-2.5,1.8-2.5,4c0,2.1,0.8,4,2.9,5.3c2.2,1.3,5.8,2.1,11.5,2c5.8-0.1,12.1-0.2,17.3,0 c5.2,0.3,9.3,1,10.7,2.6c1.4,1.6,1.8,2.7,1.6,3.6c-0.2,0.9-1,1.6-2,2.5c-0.9,0-2.4,0.1-4.3,0c-1.8-0.1-3.9-0.5-5.8-1.3 c-1.9-0.9-4.1-1.4-6.4-1.4c-2.2,0-4.5,0.4-6.3,1.5c-1.9,1-6.5,3.3-11.2,6.7c-4.7,3.5-9.6,8.2-11.8,14.3c-2.3,6.1-3.4,9.9-4.1,12.6 c-0.7,2.7-0.9,4.1-1.4,5.5c-0.5,1.4-1.3,2.8-2,4.4c-0.7,1.6-1.3,3.3-1.2,5.3c0,2-0.1,4.4-0.4,6.7s-0.6,4.5-0.9,6.1 s-0.8,3.5-1.2,5.7s-0.7,4.5-0.6,7c0,2.5-0.1,5-0.5,7.4c-0.3,2.4-0.9,4.6-1.6,6.5c-0.7,1.9-1,3.5-1.2,5.1c-0.3,1.5-0.6,3-1.4,4.5 c-0.9,1.5-2,3.4-3.2,5.2c-1.2,1.8-2.3,3.5-3.2,4.7c-0.9,1.1-1.3,2.5-1,3.6c0.3,1.1,1.2,2,3.1,2.2c1.9,0.2,3.5-0.2,4.7-1 c1.2-0.8,2-1.9,2.2-3.2c0.2-1.3,0.2-3,0.3-4.8c0.1-1.8,0.2-3.6,0.8-5l0.6-1.5l0.6-1.5c0.6-1,1-1.4,1.5-1.7 c0.4-0.3,0.9-0.6,1.5-1.3s1.6-2.9,2.4-5.2c0.8-2.3,1.5-4.9,1.4-6.7c0-1.8,0.1-3.2,0.4-4.3c0.3-1.2,0.7-2.1,1.2-3s0.8-1.9,1.2-2.7 c0.5-0.8,1.1-1.3,2.2-1.2c1.1,0.1,1.5,0.7,1.6,1.4c0.1,0.7,0.1,1.6,0.5,2.4c0.4,0.8,0.8,1.6,1.3,2.3c0.5,0.7,1.2,1.3,2.3,1.7 c1,0.4,1.8,1.1,2.3,2c0.4,0.9,0.4,1.9-0.2,2.8c-0.6,0.9-1.5,2.4-2.2,4c-0.7,1.6-1.2,3.1-1.2,4.1c0,1,0.2,2.5,0,4.1 s-0.6,3.2-1.9,4.5c-1.2,1.3-2.2,2.6-2.9,3.7c-0.7,1.1-1,2.1-1,2.7c0,0.6,0.3,1.4,0.9,2.1c0.7,0.7,1.7,1.1,3.4,1.1 c1.6,0,2.9-0.4,3.8-1c0.9-0.6,1.5-1.5,1.9-2.6c0.4-1.1,0.3-2,0.1-2.7c-0.2-0.7-0.4-1.3-0.4-2.1c0-0.8,0.2-1.6,0.5-2.6 c0.3-0.9,0.6-1.9,0.7-2.8c0.1-0.9,0.3-2,0.7-3.2c0.4-1.2,1-2.5,2-3.9s1.5-2.6,2-3.7c0.5-1.1,0.8-2,1.4-2.9 c0.6-0.9,0.9-1.3,1.1-1.5c0.2-0.1,0.5,0.1,1.1,0.4c0.6,0.4,0.8,0.7,0.6,1.2c-0.1,0.4-0.5,1-0.9,1.6s-1.1,1.7-1.9,2.9 c-0.8,1.1-1.6,2.4-2.1,3.2c-0.5,0.9-0.8,2-0.6,3s0.8,1.7,2.2,1.8c1.4,0.1,2.5,0.1,3.2-0.1c0.8-0.2,1.2-0.7,1.3-1.4 c0.1-0.8,0.3-2,0.7-3.2c0.3-1.2,0.7-2.4,1.2-3.2c0.5-0.8,0.8-1.5,1-2.1c0.2-0.6,0.2-1.1,0.2-1.5c0.8,0.7,1.4,1.6,2,2.5 c0.5,0.9,1,1.8,1.4,2.7c0.4,0.9,1.3,1.9,2.9,2.7c1.6,0.8,3.9,1.3,7,1.2c3.1-0.2,4.7-0.3,5.6-0.6s1.1-0.7,1.4-1.5 c0.4-0.8,1.2-2.3,1.6-3.8c0.4-1.5,0.4-3.1-1-4c0.2-1.3,0.6-3,1.1-4.6c0.5-1.6,1.3-3.2,2.3-4.3c1-1,2.4-2.1,3.6-3 c1.2-0.9,2.3-1.8,2.6-2.4c1.6,0.9,3.2,1.9,4.3,3.5c1.2,1.6,1.9,3.6,2.1,6.4c0,1.5,0.2,2.9,0.5,4.2c0.2,1.2,0.5,2.3,0.6,3 c0.1,0.8,0.1,1.6,0.2,2.4c0,0.9,0,1.7,0.2,2.6s0.7,1.7,1.4,2.2c0.7,0.6,1.6,0.9,2.4,0.7c0.8-0.1,1.4-0.8,1.9-1.7 c0.5-0.9,0.8-2,0.8-2.8c0-0.9-0.3-1.5-0.6-2c-0.4-0.5-0.8-0.9-1.2-1.2s-0.6-0.7-0.7-1.2s0-1.1,0.4-2.1c0.4-1,0.3-1.9,0-2.6 c-0.3-0.7-0.7-1.3-1.1-1.7s-0.8-1.4-1.2-2.8c-0.3-1.4-0.5-3.1-0.5-4.7s-0.1-3.5-0.6-5.2c-0.5-1.6-1.2-3-2.2-3.6 c2.9-0.2,6.2-0.4,9.1-1.3s5.5-2.4,7-5C185.9,130.5,184,130.7,181.7,130z M172.4,133.1c-2.6-0.6-4.8-1.7-5.9-3 c-0.6-0.7-1.4-1.4-2.2-1.9c-0.9-0.5-1.8-0.9-2.7-1.2c-0.9-0.2-2.3-0.8-3.8-1.4c-1.5-0.6-2.9-1.3-3.8-1.7c-0.2,0.4-0.6,0.9-1.2,1.5 c-0.6,0.6-1.4,1.4-2.4,2.2c-0.9,0.8-1.1,1.5-1.1,2c0.1,0.5,0.5,1,0.7,1.4c0.3,0.4,1.4,1.3,2.6,2.4c1.2,1,2.5,2,2.9,2.5 c-1.4,0-2.4-0.1-3.6-0.5c-1.2-0.4-2.5-1.1-4.7-2.5c-2.2-1.4-2.9-2.8-2.9-4.1c0-1.2,0.6-2.3,0.9-2.7s1.1-1.1,1.9-1.7 c0.8-0.6,1.6-1.2,1.9-1.5s0.6-0.6,0.5-0.9c0-0.3-0.3-0.5-0.8-0.4c-3.7,0.6-6.3,1.6-8,2.7c-1.7,1.1-2.4,2.2-2.5,3 c-0.1,0.8,0.1,1.5,0.4,2.2c0.3,0.7,0.9,1.4,1.7,2.1c0.8,0.7,1.1,1.7,1,2.6c0,0.9-0.4,1.7-0.8,2.2c-0.5,0.5-0.7,0.8-0.9,1.1 s-0.3,0.9-0.6,1.9c-0.3,1-0.5,2.9-0.6,5s-0.1,4.2,0,5.7c0.5-0.8,1.2-1.5,1.9-2c0.7-0.5,1.5-0.8,2-1c0.4,3.9,0.2,6.6-0.2,8.6 c-0.3,2-0.9,3.3-1.2,4.4c-0.1,0.3-0.2,0.5-0.4,0.4c-0.2,0-0.4-0.2-0.5-0.6c-0.3-0.9-0.8-2.3-1.4-3.6c-0.6-1.3-1.3-2.5-2-3.1 c-1.9-1.9-2.8-2.9-3.2-3.7s-0.3-1.4-0.3-2.6c-3-1.5-4-3.3-4-5.1c0-1.7,0.9-3.3,1.7-4.5c0.8-1.1,1.4-2.5,1.9-3.8 c0.5-1.3,0.7-2.4,0.8-3.1c0.1-0.7-0.3-2-0.8-3.3c-0.6-1.3-1.3-2.7-2.2-3.7c-0.2-0.1-0.7-0.2-1.3-0.1c-0.6,0.1-1.2,0.4-1.6,1.3 c-0.4,0.9-1,1.4-1.5,1.6c-0.6,0.2-1.2,0.3-1.8,0.2c-0.6-0.1-1.4-0.1-2.1,0c-0.7,0.1-1.4,0.5-1.9,1.2c-0.5,0.7-1.1,0.7-1.8,0.5 c-0.6-0.2-1.3-0.6-1.8-0.9c-0.5-0.2-0.8-0.5-1.2-0.7c-0.4-0.2-0.9-0.3-2-0.2c-1.1,0.1-1.5,0.8-1.8,1.7c-0.4,0.8-0.7,1.7-1.6,1.9 c-0.9,0.3-1.6-0.2-2-1.2c-0.4-1-0.5-2.4-0.5-3.9c-0.3-1.9,0.4-4.9,1.3-7.7c0.9-2.8,2-5.4,2.6-6.7c0.5-1.3,1.4-3.7,2.2-6.5 c0.9-2.7,1.7-5.7,2.3-8c0.6-2.3,1.9-4,3.6-5.6s3.5-3,5.2-4.7c1.7-1.7,3.7-3.2,5.7-4.3c2-1.1,4-1.8,5.5-1.8c1.5,0,3.1,0.9,4.4,1.8 c1.3,1,2.4,2,2.9,2.6c0.5,0.6,1,1.9,1.5,3.3c0.5,1.4,1,2.9,1.6,3.8c0.6,0.9,1.1,2.2,1.5,3.8c0.4,1.6,0.8,3.4,1.1,5.1 c0.3,1.8,1,3,1.7,4c0.7,1,1.5,1.8,2,2.7c0.5,0.9,1.1,3,1.8,5.3c0.7,2.3,1.6,4.9,2.7,6.6c1.1,1.7,2.8,2.9,4.5,3.6 c1.7,0.8,3.3,1.1,4.1,1.4c0.8,0.2,1.4,0.3,2,0.6c0.6,0.3,1.3,0.9,2.3,2.1c1.4,1.6,3.5,3,5.5,4c2,1,3.8,1.6,4.6,1.9 C177.9,133.6,175,133.6,172.4,133.1z"></path> <path d="M72.8,33.5l-2.9,0.8L69,47.7l2.7-0.8l0.1-2.8l4.5-1.3l1.5,2.3l2.8-0.8L72.8,33.5z M71.9,41.9l0.2-5.3l0,0l2.9,4.4 L71.9,41.9z"></path> <path d="M110.6,35.8c-0.1-1.2-0.7-2.4-2.3-2.8c0.5-0.3,1.5-0.9,1.2-2.8c-0.1-1.3-1.1-3.1-4.2-2.8l-6.1,0.7l1.4,12.6l5.3-0.6 c2.6-0.3,3.2-0.8,3.8-1.6C110.4,37.8,110.7,36.8,110.6,35.8z M102,30l3-0.3c1.2-0.1,2,0.1,2.1,1.1c0.1,1-0.7,1.5-1.7,1.6l-3.1,0.3 L102,30z M106.1,37.8l-3.2,0.4l-0.4-3.4l3.3-0.4c0.9-0.1,1.9,0.2,2.1,1.3C108.1,37.1,107.4,37.7,106.1,37.8z"></path> <path d="M120.4,26c-1.7,0.1-6,1-5.8,6.9c0.2,5.9,4.7,6.5,6.3,6.4c1.7-0.1,6-1,5.8-6.9C126.5,26.4,122,25.9,120.4,26z M120.8,37.1 c-1.4,0.1-3.5-0.7-3.6-4.3c-0.1-3.5,1.8-4.5,3.3-4.6c1.4-0.1,3.5,0.7,3.6,4.3C124.2,36,122.2,37,120.8,37.1z"></path> <path d="M141.3,36.2c0.1-2.4-0.5-2.8-1.5-3.3c1.3-0.4,2-1.6,2-3c0-1.1-0.5-3.6-3.9-3.7l-6.4-0.2l-0.4,12.7l2.6,0.1l0.2-5l2.7,0.1 c2,0.1,2,0.7,2,2.5c0,1.3,0,2,0.2,2.6l2.9,0.1l0-0.3C141.2,38.5,141.2,38,141.3,36.2z M137.1,31.8l-3.1-0.1l0.1-3.4l3.3,0.1 c1.5,0,1.8,1,1.8,1.7C139.1,31.4,138.4,31.9,137.1,31.8z"></path> </g> </g> </g></svg>
          <svg fill="#cfcece" width='80px' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 142.3 142.3" xml:space="preserve" stroke="#cfcece"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <polygon points="72.6,70.8 75.7,68.9 115.3,96 "></polygon> <polygon points="70.3,69.3 67.4,67.6 70.7,15.9 "></polygon> <polygon points="66.8,69.1 53.7,80 69.4,70.7 "></polygon> <path d="M71.1,0.6c-39,0-70.6,31.6-70.6,70.6s31.6,70.6,70.6,70.6c39,0,70.6-31.6,70.6-70.6C141.7,32.2,110.1,0.6,71.1,0.6 L71.1,0.6z M71.1,137.9c-16.1,0-31.2-5.4-42.5-15.2C17.7,113.1,9.2,97.8,7.1,81.6c5,30.9,31.7,54.4,64,54.4 c35.8,0,64.8-29,64.8-64.8c0-14.9-5.5-29.4-14-40.3c8.5,6.6,15.9,25.3,15.9,40.3C137.9,108.1,108,137.9,71.1,137.9L71.1,137.9z M65,66.1l5.7-58.5c0.1,0,0.3,0,0.4,0c0,0,0.1,0,0.1,0l0.6,61.6l9.8-5.9L71.8,7.6c34.8,0.3,62.9,28.7,62.9,63.5 c0,11.2-2.9,21.7-8,30.9L82.6,65.1l-4.2,2.4l48,35.1c-0.1,0.2-0.2,0.4-0.4,0.6L72,72.1v10.9l53.6,20.7 c-11.1,18.5-31.4,30.9-54.5,30.9c-23.1,0-43.4-12.4-54.5-30.8L70.2,83V72l-54,31c-0.1-0.2-0.2-0.4-0.4-0.6l47.8-35l-4.2-2.4 l-44,36.7c-5-9.1-7.9-19.5-7.9-30.7c0-34.6,27.7-62.7,62.1-63.5L61,63.8L65,66.1L65,66.1z M71.1,4.4C34.3,4.4,4.4,34.3,4.4,71.1 c0,15,5.4,29.1,13.7,41.4c2.8,5.3,5.8,8.5,9.9,12.8C12.1,112.6,1.8,93,1.8,71.1c0-38.3,31-69.3,69.3-69.3s69.9,32.4,68.7,69.3 C138.9,35.1,107.4,4.4,71.1,4.4L71.1,4.4z"></path> </g> </g></svg>
          <svg fill="#c9c9c9" width='120px' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 2500 2500" xml:space="preserve" stroke="#c9c9c9"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2225.5,857.7c-298.8-150.8-635.7-216.5-969.3-216.5c-336.4,0-687.1,52.5-984.8,216.5C146.6,926.8,8,1047.7,8,1201.8h0 c0,152.4,136.4,278.9,262.4,342.4c299.3,151.3,636.8,216.5,970.9,216.5c336.3,0,687.1-52.5,984.7-215.9 c123.7-67.9,262.9-188.3,262.9-341.9C2488.9,1048.8,2353.6,921.8,2225.5,857.7z M808.8,1492.3l-203.3-244.7h-6.1v244.7h-158V946.7 h-34.8v-36.5h192.8v204.9h6.1l166.8-204.9h177.8l-220.9,271.7l256.3,310.4H808.8z M1314.7,1492.3h-157.9V948.9h-34.2v-40.3h192.2 V1492.3z M1925.6,1492.3l-129.8-380.5l-130.3,380.5h-172.3l189.4-545.7h0h-30.9v-35.9h243.6l198.3,581.6H1925.6z"></path> </g></svg>
        </div>        
      </div>


      {/* Trending Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Trending near you</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Used cars under $15,000",
            "Used cars under $6,000",
            "Toyota models 2021",
            "Compact SUVs",
            "Another Car"
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={`https://static.vecteezy.com/system/resources/previews/023/192/562/non_2x/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg`}
                alt={item}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-left text-gray-800">{item}</h3>
                <p className="text-sm text-gray-600">
                  {Math.floor(Math.random() * 50000).toLocaleString()} vehicles
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Car Models Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Find car by model</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Sedan", "SUV", "Coupe", "Hatchback"].map((model, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <img
                  src=" url('./png.png')"
                  alt={model}
                  className="mx-auto mb-4"
                />
                <h3 className="font-bold text-gray-800">{model}</h3>
                <p className="text-sm text-gray-600">
                  {Math.floor(Math.random() * 30000).toLocaleString()} vehicles
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">
          Explore best selling car makes
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Subaru",
            "Volkswagen",
            "Toyota",
            "Mercedes-Benz",
            "Hyundai",
            "Infiniti",
          ].map((make, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="font-bold text-gray-800">{make}</h3>
              <p className="text-sm text-gray-600">from $50k</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8">Recent reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "2021 Cadillac Escalade",
            "2021 Hyundai Elantra",
            "2021 Mercedes-Benz GLA250",
          ].map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={`https://via.placeholder.com/300x200?text=${review}`}
                alt={review}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-gray-800">{review}</h3>
                <p className="text-sm text-gray-600">
                  Brief description of the car review goes here.
                </p>
                <p className="text-yellow-500 font-bold mt-2">4.5/5</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;
