'use client';
import React from 'react';
import { Button } from '@nextui-org/react';

const btnPhone = 'bg-transparent border border-gray-300 hover:border-[#FA8728] text-start';

export const Footer = () => {
  return (
    <footer className="w-full">
      {/* Ana Footer İçeriği */}
      <div className="container mx-auto max-w-7xl px-6 pt-6">
        <img src="./images/lb-logo.png" alt="Lastik Borsası Logo" className="mb-4" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          {/* Adres */}
          <div className="w-full md:w-auto">
            <div className="ps-3">
              <h3 className="text-lg font-semibold">Adres:</h3>
              <p className="pt-1">
                <i className="fa-solid fa-location-dot pe-2 text-[#FA8728]"></i>
                Dokuz Eylül Mahallesi 307 Sokak <br /> No: 22, Posta Kodu: 35410 <br /> Gaziemir/İzmir
              </p>
            </div>
            {/* Çalışma Saatleri */}
            <div className="ps-3 pt-3">
              <h3 className="text-lg font-semibold">Çalışma Saatlerimiz</h3>
              <p className="flex items-center pt-1">
                <i className="fa-regular fa-clock pe-2"></i>
                Hafta İçi &nbsp;&nbsp;&nbsp;: 09.00 - 18.00
              </p>
              <p className="flex items-center">
                <i className="fa-regular fa-clock pe-2"></i>
                Cumartesi &nbsp;: 09.00 - 16.00
              </p>
            </div>
          </div>

          {/* İletişim ve Sosyal Medya */}
          <div className="w-full md:w-auto text-start md:text-end sm:text-end ps-3">
            <h3 className="text-lg font-semibold">Bize Ulaşın</h3>
            <div className="flex flex-col items-start md:items-end sm:items-end  gap-3 mt-4">
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
            <div className="flex gap-2 mt-4 justify-start md:justify-end sm:justify-end ">
              {[
                { platform: 'instagram', url: 'https://www.instagram.com/lastikborsasi/' },
                { platform: 'facebook', url: 'https://www.facebook.com/lastikborsasi' },
                { platform: 'twitter', url: 'https://x.com/lastikborsasi?mx=2' },
                { platform: 'youtube', url: 'https://www.youtube.com/channel/UCWAOmsqUr9dOG841Z83Xskg' },
                { platform: 'linkedin', url: 'https://www.linkedin.com/company/lastikborsasi' },
              ].map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border rounded-md hover:bg-[#FA8728] w-8 h-8 flex justify-center items-center"
                >
                  <i className={`fa-brands fa-${social.platform}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="w-full py-3 text-center">
        <p>
          2025 © Lastik Borsası. Tüm haklar saklıdır.
        </p>
      </div>
    </footer>
  );
};