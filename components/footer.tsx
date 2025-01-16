"use client"
import React from 'react'
import {Button} from "@nextui-org/react";

const hoverText = 'hover:text-[#FFB45F] flex ';
const btnPhone = 'bg-transparent border hover:border-[#FA8728] text-start';

export const Footer = () => {
  return (
    <div className='container mx-auto max-w-7xl px-6 flex-grow'>
        <div className='pt-6'>
            <img src="./images/lb-logo.png" alt="" />
        </div>
        <div className="flex justify-between items-center  pe-2 px-3">
          <div>
            {/* <h3 className="font-bold mb-4">Lastik Borsası</h3> */}
            <div>
                <h3>Adres:</h3>
                <p className='pt-1'><i className="fa-solid fa-location-dot pe-2"></i>Dokuz Eylül Mahallesi 307 Sokak <br/> No: 22
                Posta Kodu: 35410 Gaziemir/İzmir</p>
            </div>
            <div className='mt-5'>
                <h3>ÇALIŞMA SAATLERİMİZ</h3>
                <p className='pt-1'><i className="fa-regular fa-clock pe-2"></i>Hafta İçi: 09.00 - 18.00</p>
                <p><i className="fa-regular fa-clock pe-2"></i>Cumartesi: 09.00 - 16.00</p>
            </div>
            {/* <ul className="space-y-2">
              {[
                'Hakkımızda',
                'İletişim',
                'Yardım Merkezi',
                'Banka Hesap Bilgileri',
                'İptal ve İade Koşulları',
                'Gizlilik ve Güvenlik',
                'Üyelik Sözleşmesi',
                'Blog',
              ].map((item) => (
                <li key={item} className="truncate">
                  <a href="#" className={`${hoverText} whitespace-nowrap overflow-hidden text-ellipsis`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul> */}
          </div>
          <div className="">
            <h3 className="font-bold text-end">Bize Ulaşın</h3>
            <div className="flex flex-col items-end gap-3 mt-4">
              {[
                { icon: 'phone', text: '444 06 52' },
                { icon: 'phone', text: '0850 441 46 52' },
                { icon: 'envelope', text: 'info@lastikborsasi.com' },
              ].map((contact) => (
                <Button
                  key={contact.text}
                  radius="sm"
                  className={btnPhone}
                >
                  <i className={`fa-solid fa-${contact.icon} mr-2 hover:text-[#FA8728]`}></i>
                  {contact.text}
                </Button>
              ))}
            </div>
            <div className="flex gap-2 mt-4 justify-end">
                {[
                { platform: 'instagram', url: 'https://www.instagram.com/lastikborsasi/' },
                { platform: 'facebook', url: 'https://www.facebook.com/lastikborsasi' },
                { platform: 'twitter', url: 'https://x.com/lastikborsasi?mx=2' },
                { platform: 'youtube', url: 'https://www.youtube.com/channel/UCWAOmsqUr9dOG841Z83Xskg' },
                { platform: 'linkedin', url: 'https://www.linkedin.com/uas/login?session_redirect=%2Fcompany%2F19046059' },
                ].map((social) => (
                <button
                    key={social.platform}
                    className="border rounded-md hover:bg-[#FA8728] w-8 h-8 flex justify-center items-center"
                >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                    <i className={`fa-brands fa-${social.platform}`}></i>
                    </a>
                </button>
                ))}
            </div>
          </div>


         

          

        </div>
    </div>
  )
}