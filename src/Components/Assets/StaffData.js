 import man from"./man.png";
 import woman from "./women.png";
 
 const staffData= [
    {
      title: "Bar staff (2)",
      staff: [
        {
          name: "Carol Saragosa",
          role: "Waitress - 16h",
          pay:"$800",
          logo:man,
          shifts: [
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            {type:"evening"},
            { time: "08:00-12:00", hours: "3.5h", pay: "$80", type: "normal" },
            { time: "Approved leave", hours: "08:00-16:00", pay: "", type: "absent" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "normal" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
                {  type: "evening" },
            {  type: "evening" },
            { type: "evening" },
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            {  type: "evening" },
            

          ],
        },
        {
          name: "John Smith",
          role: "Waitress - 16h",
          pay:"$800",
          logo:woman,
          shifts: [
           
            { time: "08:00-12:00", hours: "4h", pay: "$80", type: "normal" },
            { time: "Approved leave", hours: "All day", pay: "", type: "absent" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$80", type: "normal" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "leave" },
            {time: "Approved leave", hours: "08:00-16:00", pay: "", type: "absent"  },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
             { time: "08:00-12:00", hours: "Absent", pay: "-", type: "fire" },
             {type: "absent"},
             {type:"evening"},
             { time: "18:30-23:30", hours: "5h", pay: "$120", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
             {  type: "absent" },
            {  type: "evening" },

          ],
        },
      ],
    },


    {
      title: "Janitors (2)",
      staff: [
        {
          name: "Carol Saragosa",
          role: "Waitress - 16h",
            logo:man,
          shifts: [
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            {type:"evening"},
            { time: "08:00-12:00", hours: "3.5h", pay: "$80", type: "normal" },
            { time: "Approved leave", hours: "08:00-16:00", pay: "", type: "absent" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "normal" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
                {  type: "evening" },
            {  type: "evening" },
            { type: "evening" },
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            {  type: "evening" },
          ],
        },
        {
          name: "John Smith",
          role: "Waitress - 16h",
           logo:woman,
          shifts: [
            
            { time: "08:00-12:00", hours: "4h", pay: "$80", type: "normal" },
            { time: "Approved leave", hours: "All day", pay: "", type: "absent" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$80", type: "normal" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "leave" },
            {time: "Approved leave", hours: "08:00-16:00", pay: "", type: "absent"  },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
             { time: "08:00-12:00", hours: "Absent", pay: "-", type: "fire" },
             {type: "absent"},
             {type:"evening"},
             { time: "18:30-23:30", hours: "5h", pay: "$120", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
             {  type: "absent" },
            {  type: "evening" },

          ],
        },
      ],
    },

    {
      title: "Waiters/Waitresses (6)",
      staff: [
        {
          name: "Carol Saragosa",
          role: "Waitress - 16h",
            logo:man,
          shifts: [
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            {type:"evening"},
            { time: "08:00-12:00", hours: "3.5h", pay: "$80", type: "normal" },
            { time: "Approved leave", hours: "08:00-16:00", pay: "", type: "absent" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "normal" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
                {  type: "evening" },
            {  type: "evening" },
            { type: "evening" },
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            {  type: "evening" },
          ],
        },
        {
          name: "John Smith",
          role: "Waitress - 16h",
           logo:woman,
          
          shifts: [
             { time: "08:00-12:00", hours: "4h", pay: "$80", type: "normal" },
            { time: "Approved leave", hours: "All day", pay: "", type: "absent" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$80", type: "normal" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "leave" },
            {time: "Approved leave", hours: "08:00-16:00", pay: "", type: "absent"  },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
             { time: "08:00-12:00", hours: "Absent", pay: "-", type: "fire" },
             {type: "absent"},
             {type:"evening"},
             { time: "18:30-23:30", hours: "5h", pay: "$120", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
             {  type: "absent" },
            {  type: "evening" },

          ],
        },
        {
          name: "Carol Saragosa",
          role: "Waitress - 16h",
            logo:man,
          shifts: [
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            {type:"evening"},
            { time: "08:00-12:00", hours: "3.5h", pay: "$80", type: "normal" },
            { time: "Approved leave", hours: "08:00-16:00", pay: "", type: "absent" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "normal" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
                {  type: "evening" },
            {  type: "evening" },
            { type: "evening" },
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            {  type: "evening" },
          ],
        },
        {
          name: "John Smith",
          role: "Waitress - 16h",
           logo:woman,

          shifts: [
            
        { time: "08:00-12:00", hours: "4h", pay: "$80", type: "normal" },
            { time: "Approved leave", hours: "All day", pay: "", type: "absent" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$80", type: "normal" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "leave" },
            {time: "Approved leave", hours: "08:00-16:00", pay: "", type: "absent"  },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
             { time: "08:00-12:00", hours: "Absent", pay: "-", type: "fire" },
             {type: "absent"},
             {type:"evening"},
             { time: "18:30-23:30", hours: "5h", pay: "$120", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
             {  type: "absent" },
            {  type: "evening" },

           
          ],
        },
        {
          name: "Carol Saragosa",
          role: "Waitress - 16h",
            logo:man,
          shifts: [
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "normal" },
            {type:"evening"},
            { time: "08:00-12:00", hours: "3.5h", pay: "$80", type: "normal" },
            { time: "Approved leave", hours: "08:00-16:00", pay: "", type: "absent" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "normal" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
                {  type: "evening" },
            {  type: "evening" },
            { type: "evening" },
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
             { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            {  type: "evening" },
            
          ],
        },
        {
          name: "John Smith",
          role: "Waitress - 16h",
           logo:woman,
          shifts: [
          { time: "08:00-12:00", hours: "4h", pay: "$80", type: "normal" },
            { time: "Approved leave", hours: "All day", pay: "", type: "absent" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$80", type: "normal" },
            { time: "18:30-23:30", hours: "5h", pay: "$120", type: "leave" },
            {time: "Approved leave", hours: "08:00-16:00", pay: "", type: "absent"  },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
             { time: "08:00-12:00", hours: "Absent", pay: "-", type: "fire" },
             {type: "absent"},
             {type:"evening"},
             { time: "18:30-23:30", hours: "5h", pay: "$120", type: "leave" },
            { time: "08:00-12:00", hours: "3.5h", pay: "$90", type: "leave" },
             {  type: "absent" },
            {  type: "evening" },

         
          ],
        },


      ],
    }
  
];
export default staffData;