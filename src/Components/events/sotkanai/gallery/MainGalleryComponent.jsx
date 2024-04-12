import React from 'react';
import './photoGallery.css';
import ImageGallery from './DistrictImage';
import SotkanaiData from '../Sotkanai-Data';
// import { useState,useEffect } from 'react';

//Sample Json Response
const imageData ={
    "provinces": [
      {
        "name": "வடக்கு மாகாணம்",
        "districts": [
          {
            "name": "யாழ்ப்பாணம்",
            "images": [
               "https://cdn.audleytravel.com/5237/3740/79/1332748-jaffna-library.jpg",
                "https://live.staticflickr.com/65535/52613194496_2d3d39870c_o.png",
              "district1_image10.jpg"
            ]
          },
          {
            "name": "முல்லைத்தீவு",
            "images": [
                "https://assets-global.website-files.com/576fd5a8f192527e50a4b95c/5eabf07d46d66a4f49bfe76d_sumbarines%20in%20Mullaitivu.jpg",
              "district2_image2.jpg",
              "district2_image10.jpg"
            ]
          },
            {
                "name": "மன்னார்",
                "images": [
                    "https://upload.wikimedia.org/wikipedia/commons/a/af/Lighthouse%2C_Talaimannar.jpg",
                "district6_image2.jpg",
                "district6_image10.jpg"
                ]
            },
            {
                "name": "கிளிநொச்சி",
                "images": [
                    "https://www.lanka-excursions-holidays.com/uploads/4/0/2/1/40216937/published/kilinochchi-water-tower-monument-title-photo.jpg?1674025539",
                "district7_image2.jpg",
                "district7_image10.jpg"
                ]
            },
            {
                "name": "வவுனியா",
                "images": [
                    "https://nashaplaneta.net/asia/srilanka/images_jafna/vavuniya1.jpg",
                "district8_image2.jpg",
                "district8_image10.jpg"
                ]
            }
        ]
      },
      {
        "name": "கிழக்கு மாகாணம்",
        "districts": [
          {
            "name": "திருகோணமலை",
            "images": [
                "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/09/og-image-for-trincomalee-tourist-attractions.jpg",
              "district3_image2.jpg",
              "district3_image10.jpg"
            ]
          },
          {
            "name": "மட்டக்களப்பு",
            "images": [
                "https://www.shutterstock.com/image-photo/batticaloa-eastern-province-sri-lanka-600nw-1723309015.jpg",
              "district4_image2.jpg",
              "district4_image10.jpg"
            ]
          },
            {
                "name": "அம்பாறை",
                "images": [
                    "https://upload.wikimedia.org/wikipedia/commons/a/af/Lighthouse%2C_Talaimannar.jpg",
                "district5_image2.jpg",
                "district5_image10.jpg"
                ]
            }
        ]
      },
        {
            "name": "மத்திய மாகாணம்",
            "districts": [
            {
                "name": "kandy",
                "images": [
                    "https://whc.unesco.org/uploads/thumbs/site_0450_0020-1200-630-20151105154018.jpg",
                "district9_image2.jpg",
                "district9_image10.jpg"
                ]
            },
            {
                "name": "nuwaraeliya",
                "images": [
                    "https://cdn.audleytravel.com/5237/3740/79/1332748-jaffna-library.jpg",
                "district10_image2.jpg",
                "district10_image10.jpg"
                ]
            },
                {
                    "name": "matale",
                    "images": [
                        "https://cdn.audleytravel.com/5237/3740/79/1332748-jaffna-library.jpg",
                    "district11_image2.jpg",
                    "district11_image10.jpg"
                    ]
                }
            ]
        },
        {
            "name": "மேல் மாகாணம்",
            "districts": [
            {
                "name": "colombo",
                "images": [
                    "https://cdn.audleytravel.com/5237/3740/79/1332748-jaffna-library.jpg",
                "district12_image2.jpg",
                "district12_image10.jpg"
                ]
            },
                {
                    "name": "kalutara",
                    "images": [
                        "https://cdn.audleytravel.com/5237/3740/79/1332748-jaffna-library.jpg",
                    "district14_image2.jpg",
                    "district14_image10.jpg"
                    ]
                }
            ]
        },
        {
            "name": "southern",
            "districts": [
                {
                    "name": "hambantota",
                    "images": [
                        "https://cdn.audleytravel.com/5237/3740/79/1332748-jaffna-library.jpg",
                    "district17_image2.jpg",
                    "district17_image10.jpg"
                    ]
                }
            ]
        }
    ]
  }




const MainGalleryComponent = () => {

    //Uncomment after defining the Rest API
    // const [imageData, setImageData] = useState(null);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('getImageData');
    //       const data = await response.json();
    //       setImageData(data);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []); 
  
    // if (!imageData) {
    //   return <div>Loading...</div>;
    // }

    return ( <div>
        {SotkanaiData.provinces.map((province, index) => (
          <ImageGallery key={index} province={province} />
        ))}
      </div>
       );
};
 
export default MainGalleryComponent;