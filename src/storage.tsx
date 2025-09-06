async function fetchAndStoreData() {
    try {
      const res = await fetch("https://press.fayadev.net/api/pages/15/45");
      const resOurPartner = await fetch("https://press.fayadev.net/api/pages/15/45");
      const resAboutUs = await fetch("https://press.fayadev.net/api/pages/15/39");
      const resSlideNews = await fetch("https://press.fayadev.net/api/pages/15/45");
      const dataOurProjects = await res.json();
      const dataOurPartner = await resOurPartner.json();
      const dataAboutUs = await resAboutUs.json();
      const dataSlideNews = await resSlideNews.json();

      // store length as string
      localStorage.setItem("OurProjectsDataLength", String(dataOurProjects.data.length));
      localStorage.setItem("OurPartnerDataLength", String(dataOurPartner.data.length));
      localStorage.setItem("AboutUsDataLength", String(dataAboutUs.data.length));
      localStorage.setItem("slideNewsDataLength", String(dataSlideNews.data.length) )
      
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  }
  
  fetchAndStoreData();
  