interface MetaData {
  metaTitle: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogUrl: string;
  twitterTitle: string;
  twitterDescription: string;
  ogImage: string;  
  twitterImage: string;  
}

const siteTitle = " | Lastikborsasi.com";

export const metaData = {
  home: {
    metaTitle: `Anasayfa ${siteTitle}`,
    description: "",
    ogTitle: `Ana Sayfa${siteTitle}`,
    ogDescription: "",
    ogUrl: "https://www.lastikborsasi.com",  
    twitterTitle: `Ana Sayfa${siteTitle}`,
    twitterDescription: "",
    ogImage: "",  
    twitterImage: ""  
  },
};