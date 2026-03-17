
let defaultEvents = [

    {
    id:1,
    title:"Music Festival",
    date:"10 June 2026",
    Time:"6:00",
    location:"Mumbai",
    Ticket:"500",
    category:"Music",
    image:"event1.jpg",
    description:"Enjoy live music performances from famous bands."
    },
    
    {
    id:2,
    title:"Food Carnival",
    date:"15 June 2026",
    Time:"9:00",
    location:"Delhi",
    Ticket:"1000",
    category:"Food",
    image:"event2.jpg",
    description:"Taste delicious street foods from all over India."
    },
    
    {
    id:3,
    title:"Startup Meetup",
    date:"18 June 2026",
    Time:"10:00",
    location:"Bangalore",
    Ticket:"500",
    category:"Tech",
    image:"event3.jpg",
    description:"Meet entrepreneurs and investors."
    },
    
    {
    id:4,
    title:"Art Exhibition",
    date:"20 June 2026",
    Time:"8:00",
    location:"Ahmedabad",
    Ticket:"1500",
    category:"Cultural",
    image:"event4.jpg",
    description:"Explore modern and creative artworks."
    },
    
    {
    id:5,
    title:"Fashion Show",
    date:"22 June 2026",
    Time:"11:00",
    location:"Surat",
    Ticket:"1000",
    category:"Cultural",
    description:"Discover the latest fashion trends.",
    image:"event5.jpg"
    },
    
    {
    id:6,
    title:"Tech Conference",
    date:"25 June 2026",
    Time:"8:00",
    location:"Pune",
    Ticket:"1000",
    category:"Tech",
    image:"event6.jpg",
    description:"Technology innovation event."
    },
    
    {
    id:7,
    title:"Photography Workshop",
    date:"27 June 2026",
    Time:"10:00",
    location:"Goa",
    Ticket:"500",
    category:"Cultural",
    image:"event7.jpg",
    description:"Learn photography from experts."
    },
    
    {
    id:8,
    title:"Gaming Tournament",
    date:"29 June 2026",
    Time:"2:00",
    location:"Hyderabad",
    Ticket:"2000",
    category:"Sports",
    image:"event8.jpg",
    description:"Competitive esports tournament."
    },
    
    {
    id:9,
    title:"Yoga Retreat",
    date:"2 July 2026",
    Time:"6:00",
    location:"Rishikesh",
    Ticket:"500",
    category:"Sports",
    image:"event9.jpg",
    description:"Relax and meditate with yoga."
    },
    
    {
    id:10,
    title:"Book Fair",
    date:"5 July 2026",
    Time:"9:00",
    location:"Jaipur",
    Ticket:"200",
    category:"Cultural",
    image:"event10.jpg",
    description:"Explore thousands of books."
    },
    
    {
    id:11,
    title:"Comedy Night",
    date:"8 July 2026",
    Time:"9:00",
    location:"Chennai",
    Ticket:"200",
    category:"Cultural",
    image:"event11.jpg",
    description:"Laugh out loud with top comedians."
    },
    
    {
    id:12,
    title:"Garba Night",
    date:"12 July 2026",
    Time:"9:00",
    location:"Kolkata",
    Ticket:"100",
    category:"Cultural",
    image:"event12.jpg",
    description:"Garba is a joyful circular Gujarati folk dance performed during Navratri."
    }
    
    ];


/* MAIN EVENTS ARRAY */
let events = JSON.parse(localStorage.getItem("events")) || defaultEvents;