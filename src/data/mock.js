// Mock data for wedding website
import motherPic from "../data/images/groomfamily/mother.jpeg"
import fatherPic from "../data/images/groomfamily/father.jpeg"
import sisterPic from "../data/images/groomfamily/sister.jpeg"
import grandmother from "../data/images/groomfamily/daadi.jpeg"

import mehendi from "../data/images/ceremony/mehendi.png"
import haldi from "../data/images/ceremony/haldi.png"
import ring from "../data/images/ceremony/ring.png"
import sangeet from "../data/images/ceremony/sangeet.png"
import carnival from "../data/images/ceremony/carnival.png"
import varamala from "../data/images/ceremony/varmala.png"
// import tempEvent from "../data/images/6.png"


export const weddingData = {
  couple: {
    groom: "Palash",
    bride: "Tanishka",
    groomFather: "Late Pradeep Jaiswal",
    groomGrandfather: "Late Badri Prasad Jaiswal",
    groomCity: "New Shastri Nagar, Jabalpur (MP)",
    brideFather: "Kamlesh Chouksey",
    brideGrandfather: "Shrikant Chouksey",
    brideCity: "Bhita, Jabalpur (MP)"
  },
  weddingDate: {
    date: "11",
    month: "March",
    year: "2026",
    day: "Wednesday",
    targetDate: "2026-03-11T19:00:00+05:30"
  },
  venue: {
    name: "Narmada Vatika Resort",
    location: "Near Pavan Sthapak Eye Hospital, Jabalpur,(M.P.)",
    fullAddress: "Tilwara Ghat Chargawan Road, Jabalpur (M.P.)",
    mapUrl: "https://maps.app.goo.gl/MReCpBXq311tdk5GA"
  },
  events: [
    {
      id: 1,
      name: "Mehendi Ceremony",
      date: "Tuesday, 09 March, 2026",
      time: "05:00 p.m. onwards",
      watermark: mehendi
    },
    {
      id: 2,
      name: "Haldi Ceremony",
      date: "Tuesday, 10 March, 2026",
      time: "11:30 a.m. Onwards",
      watermark: haldi
    },
    {
      id: 3,
      name: "Ring Ceremony",
      date: "Tuesday, 10 March, 2026",
      time: "07:00 p.m. Onwards",
      watermark: ring
    },
    {
      id: 4,
      name: "Sangeet Night",
      date: "Tuesday, 10 March, 2026",
      time: "08:00 p.m. Onwards",
      watermark: sangeet
    },
    {
      id: 5,
      name: "Pool Party/Carnival",
      date: "Wednesday, 11 March, 2026",
      time: "12:00 p.m. Onwards",
      watermark: carnival
    },
    {
      id: 6,
      name: "Varamala & Wedding Ceremony",
      date: "Wednesday, 11 March, 2026",
      time: "08:00 p.m. Onwards",
      watermark: varamala
    }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
    "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800",
    "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800",
    "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800",
    "https://images.unsplash.com/photo-1605017492956-7a56f3a3f585?w=800",
    "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800"
  ],
  families: {
    groom: "Mrs. Anjula Jaiswal & Palak Jaiswal & All Jaiswal Family",
    bride: "Mr. Kamlesh Chouksey & All Chouksey Family"
  },
  familiesDetailed: {
    groom: [
      { name: "Mr. Late Pradeep Jaiswal", photo: fatherPic, relation: "Father" },
      { name: "Mrs. Anjula Jaiswal", photo: motherPic, relation: "Mother" },
      { name: "Miss. Palak Jaiswal", photo: sisterPic, relation: "Sister" },
      { name: "Mrs. Kamla Jaiswal", photo: grandmother, relation: "Grandmother" }
    ],
    bride: [
      { name: "Mr. Kamlesh Chouksey", photo: "https://images.unsplash.com/photo-1531123414780-f7ef0056c7d7?w=800&q=80", relation: "Father" },
      { name: "Mrs. Sapna Chouksey", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80", relation: "Mother" },
      { name: "Mr. Abhinav Chouksey", photo: "https://images.unsplash.com/photo-1545996124-1a3c1be6f1b4?w=800&q=80", relation: "Brother" },
      { name: "Mrs. Seema Chouksey", photo: "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=800&q=80", relation: "Grandmother" }
    ]
  },
  invitee: {
    name: "Anjula Jaiswal & Family",
    address: "New Shastri Nagar, Rajesh Chowk, Near Durga Mandir, Jabalpur (M.P.)",
    phone: "+91 7999525032"
  }
  // firm: {
  //   name: "P V Jewellers",
  //   address: "Road No 6, Gandhi Nagar, Mumbai(M.H.)"
  // }
};
