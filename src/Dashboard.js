import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card, CardContent, Typography, Grid } from '@mui/material';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // In a real application, you would fetch the CSV data here
    // For this example, we'll use the data directly
    const csvData = `User Name,User Email,Google Cloud Skills Boost Profile URL,Profile URL Status,Access Code Redemption Status,All Skill Badges & Games Completed,# of Skill Badges Completed,Names of Completed Skill Badges,# of Arcade Games Completed,Names of Completed Arcade Games
"PENIKELAPATI TEJ PAVAN","tejpavan.cloud@gmail.com","https://www.cloudskillsboost.google/public_profiles/fa06098d-8660-447a-8f4b-bed89a603933","All Good","Yes","No",0,"",0,""
"VAJJIPARTI SATWIK RAJ","satwikrajv1@gmail.com","https://www.cloudskillsboost.google/public_profiles/0471df74-79f3-4bf2-b8e8-3091b95ffc73","All Good","Yes","No",0,"",0,""
"Janvika Nakka","janvika371@gmail.com","https://www.cloudskillsboost.google/public_profiles/d2b7a32b-7f6b-4bcd-b32f-3963bcb7a315","All Good","Yes","No",0,"",0,""
"Abhiram Kamsali","ajax40215@gmail.com","https://www.cloudskillsboost.google/public_profiles/faa7959f-a119-43dc-bd4d-839c0d798e94","All Good","Yes","No",3,"Get Started with Cloud Storage [Skill Badge] | Get Started with Looker [Skill Badge] | Cloud Speech API: 3 Ways [Skill Badge]",1,"Level 3: Google Cloud Adventures [Game]"
"Samala Sripadh","samalasripadh9@gmail.com","https://www.cloudskillsboost.google/public_profiles/573007f5-623f-4f77-b742-2aa3fd4830b4","All Good","Yes","No",0,"",1,"Level 3: Google Cloud Adventures [Game]"
"Hrishikesh Reddy P","hrishikeshreddyp772@gmail.com","https://www.cloudskillsboost.google/public_profiles/30ccc64c-4bef-412f-acd9-70076c3be986","All Good","Yes","No",0,"",0,""
"Kushwant KR","kushwantkr24@gmail.com","https://www.cloudskillsboost.google/public_profiles/9f38cc1e-c9d9-496e-a6d2-5ae552a2e345","All Good","Yes","No",0,"",0,""
"ALLU NANDA KISHORE","allunandakishore@gmail.com","https://www.cloudskillsboost.google/public_profiles/c0e50e0c-ab11-4664-afd7-71446eaeb508","All Good","No","No",0,"",0,""
"ARAVIND REDDY","aravindreddygari4@gmail.com","https://www.cloudskillsboost.google/public_profiles/ee7664af-963c-43b0-aa43-1876b77ae22c","All Good","No","No",0,"",0,""
"Deepak Reddy","deepakreddyats1@gmail.com","https://www.cloudskillsboost.google/public_profiles/09a04cf0-1906-433e-87bc-8f088fe1157a","All Good","No","No",0,"",0,""
"Gazula Venkata Naga Sathya Sai Vignesh","gazula.2006@gmail.com","https://www.cloudskillsboost.google/public_profiles/6064fe02-7ef8-4bea-920a-c002cda8ea58","All Good","Yes","No",0,"",0,""
"B Harshith Reddy","Harshithreddy2709@gmail.com","https://www.cloudskillsboost.google/public_profiles/8755c775-8c7d-483a-8b7e-5fc8adab79fe","All Good","Yes","No",0,"",0,""
"K Meghana","meghanagdgc@gmail.com","https://www.cloudskillsboost.google/public_profiles/82948075-781c-4d49-8bee-1c7696aa2d9f","All Good","No","No",0,"",0,""
"Harshitha Yadav","hershyadav1412@gmail.com","https://www.cloudskillsboost.google/public_profiles/16e02043-6600-4ab1-9d59-0a5d45f9fa93","All Good","Yes","No",0,"",0,""
"Nyalapatla Karthik Reddy","karthiknyalapatla05@gmail.com","https://www.cloudskillsboost.google/public_profiles/6ccb825c-e77f-436a-9ca8-5c9147fa1b9c","All Good","Yes","No",0,"",0,""
"VENILA BADUGU","venstudyjam1@gmail.com","https://www.cloudskillsboost.google/public_profiles/300eab22-f32a-4af5-889b-13085d42459a","All Good","Yes","No",0,"",0,""
"Dishant Faujdar","dishantchoudary2@gmail.com","https://www.cloudskillsboost.google/public_profiles/b991fe93-4ae8-43d5-85a6-c72e3b06afff","All Good","No","No",0,"",0,""
"Kalakuntla Umesh Kumar","umeshkalakuntla22@gmail.com","https://www.cloudskillsboost.google/public_profiles/39312b76-888d-4b6a-a8a4-814a35d1e9a0","All Good","Yes","No",0,"",0,""
"Thammali Siddeshwar","siddeshwart29@gmail.com","https://www.cloudskillsboost.google/public_profiles/6af0a1b3-3218-460e-8fed-99ca36fa6e3f","All Good","Yes","No",0,"",0,""
"S Koushik Reddy","koushik.official.31@gmail.com","https://www.cloudskillsboost.google/public_profiles/61d0dd2d-2f00-4a4f-a3f2-1d478bb75aaa","All Good","No","No",0,"",0,""
"Mulla Ruhulalemeen","mruhan2829@gmail.com","https://www.cloudskillsboost.google/public_profiles/0f229882-6b22-4be3-943e-87203ad417f4","All Good","Yes","No",0,"",0,""
"Samanthapudi Bharath Kumar","bharathsamanthapudi55@gmail.com","https://www.cloudskillsboost.google/public_profiles/f7bba214-8c71-4cdf-aecc-94c046737bd8","All Good","Yes","No",0,"",0,""
"Narsingoju tharun","tharunnarsingoju@gmail.com","https://www.cloudskillsboost.google/public_profiles/ce048e58-f2c5-4a80-904d-d71c5732de37","All Good","Yes","No",0,"",0,""
"PULASANI NAVAROJ REDDY","navarojreddy48@gmail.com","https://www.cloudskillsboost.google/public_profiles/3c96c7ee-9865-4be0-94b5-aeff17f0a77e","All Good","No","No",0,"",0,""
"UPPARI VISHNU VARDHAN","upparivishnu95@gmail.com","https://www.cloudskillsboost.google/public_profiles/8cd7b900-5378-4476-8745-711cd3c58d19","All Good","Yes","No",0,"",0,""
"Phanindher Reddy sundu","sunduphanindherreddy@gmail.com","https://www.cloudskillsboost.google/public_profiles/e84d72df-3bac-4dce-974d-ecae1f9e7388","All Good","No","No",0,"",0,""
"MOSRA ANIRUDH REDDY","anirudhreddy6440@gmail.com","https://www.cloudskillsboost.google/public_profiles/0b4044ba-76b3-4510-bd6d-4552526b0009","All Good","Yes","No",0,"",0,""
"Koushik Reddy","koushikreddy752007@gmail.com","https://www.cloudskillsboost.google/public_profiles/e96dc070-0c1b-4fc6-9f0a-354a678f8d61","All Good","No","No",0,"",0,""
"Yashwanth Buddana","yashwanthbuddana@gmail.com","https://www.cloudskillsboost.google/public_profiles/253d542d-0434-49dc-883c-94cdae29eae5","All Good","No","No",0,"",0,""
"Ashwitha Reddy","ashwithareddybhanoori70@gmail.com","https://www.cloudskillsboost.google/public_profiles/f6389151-4fa3-475b-8e70-f7377bcbfeb4","All Good","No","No",0,"",0,""
"sudahemavardhan Reddy","sudahemavardhanreddy@gmail.com","https://www.cloudskillsboost.google/public_profiles/c766cb2f-3eb8-4793-b901-61c043524b0f","All Good","No","No",0,"",0,""
"Sai Vashist","dongarasaivashist3@gmail.com","https://www.cloudskillsboost.google/public_profiles/27b04c68-7255-4b4d-8a96-7b581b3ef5d7","All Good","No","No",0,"",0,""
"K. Harshith Reddy","hr803221@gmail.com","https://www.cloudskillsboost.google/public_profiles/26acdd03-ac24-4c85-a172-611e868940d0","All Good","Yes","No",0,"",0,""
"Rajkumar Singh","rajkumarsingh273313@gmail.com","https://www.cloudskillsboost.google/public_profiles/81191bcd-924c-40e5-86dc-db52bdacb133","All Good","No","No",0,"",0,""
"Veera Chakradhar","veerachakradhar443@gmail.com","https://www.cloudskillsboost.google/public_profiles/055b3149-e4cd-4c26-a3d6-7aa1ec1b6520","All Good","No","No",0,"",0,""
"Bharath","bharath17012007@gmail.com","https://www.cloudskillsboost.google/public_profiles/f952c383-dfa2-45f9-9586-47daa5e2c2cf","All Good","Yes","No",0,"",0,""
"B hemagiri","himagirib8989@gmail.com","https://www.cloudskillsboost.google/public_profiles/f3a8520d-e717-4333-8aeb-bd9dbd834fe3","All Good","Yes","No",0,"",0,""
"Vivek Varma","vivekvarma7396@gmail.com","https://www.cloudskillsboost.google/public_profiles/d504df34-d147-4d86-8d00-85278af30620","All Good","Yes","No",0,"",0,""
"Sai Praneeth","gubbasaipraneethdl@gmail.com","https://www.cloudskillsboost.google/public_profiles/8f7cd313-0425-4850-a02b-dbf5ffe0eca9","All Good","Yes","No",0,"",0,""
"A Ganesh","alleshwaramganesh@gmail.com","https://www.cloudskillsboost.google/public_profiles/d1bbf796-8ad9-4da7-a796-91a8a91da439","All Good","No","No",0,"",0,""
"Yash Sharma","Sharma012yash@gmail.com","https://www.cloudskillsboost.google/public_profiles/1718e1a7-88c5-4dde-96dd-9d51fa2708d9","All Good","Yes","No",0,"",0,""
"Charan","charanbvn07@gmail.com","https://www.cloudskillsboost.google/public_profiles/dad4626b-1b3e-4370-a54c-2b92343d52fa","All Good","No","No",0,"",0,""
"POTTA VISHAL REDDY","vishalreddygdg@gmail.com","https://www.cloudskillsboost.google/public_profiles/fe102d6b-9511-4085-9794-5e334bad6d58","All Good","No","No",0,"",0,""
"BESTA DINESH","bestadinesh2020@gmail.com","https://www.cloudskillsboost.google/public_profiles/26217efa-c9c2-47dc-85dc-08a3e1c000f7","All Good","Yes","No",0,"",0,""
"Gariga Aadesh","garigaaadesh@gmail.com","https://www.cloudskillsboost.google/public_profiles/67cb3c1a-3beb-4d28-ab61-44af4f733f14","All Good","No","No",0,"",0,""
"Gunnampalli abhinav sai","abhinavsai039@gmail.com","https://www.cloudskillsboost.google/public_profiles/f3763b53-e91f-475c-a682-565bbf7793d2","All Good","No","No",0,"",0,""
"Yousuf Mohammed Abdul Lateef","yousufbtw@gmail.com","https://www.cloudskillsboost.google/public_profiles/57731ad7-d460-4150-9032-516e5d586c10","All Good","No","No",0,"",0,""
"Dara shanthi Priya","darasandy626@gmail.com","https://www.cloudskillsboost.google/public_profiles/f40f0cce-8420-4735-bdf7-3d1f287d3a10","All Good","Yes","No",0,"",0,""
"CHANIKYA AMANCHA","chanikya955@gmail.com","https://www.cloudskillsboost.google/public_profiles/cbb5e153-d7ae-41a7-8def-bc0582d0e598","All Good","Yes","No",0,"",0,""
"Kadam Samskruthi","kadamsamskruthiwork@gmail.com","https://www.cloudskillsboost.google/public_profiles/654a3c71-fe01-4850-a6ec-9c66b600448a","All Good","No","No",0,"",0,""
"PRANAYA SRI MALTHUM","pranayasri.malthum@gmail.com","https://www.cloudskillsboost.google/public_profiles/d4ba7738-9bd7-4acb-8cb0-21a4d09541d0","All Good","No","No",0,"",0,""
"ESIKALA BALA SAI DHANUSH","esikeladhanush@gmail.com","https://www.cloudskillsboost.google/public_profiles/bb36b5a3-68b3-4d49-96cb-b5656da4979b","All Good","No","No",0,"",0,""
"Dhamodar Pranuthi","pranuthidhamodar@gmail.com","https://www.cloudskillsboost.google/public_profiles/5858b893-bd55-4619-91ee-d7abd1aa5315","All Good","No","No",0,"",0,""
"P Shesha Sai","saishesha9@gmail.com","https://www.cloudskillsboost.google/public_profiles/5a74ff6d-0cd7-4099-845b-a237cb10b76e","All Good","No","No",0,"",0,""
"A U AYUSH Kumar","ayushkumarau12@gmail.com","https://www.cloudskillsboost.google/public_profiles/a26c402a-f948-4bc2-b4b7-cfad089fb089","All Good","No","No",0,"",0,""
"Pranav Chandra Kodali","pranavchandra.kodali@gmail.com","https://www.cloudskillsboost.google/public_profiles/2c6572ca-ad14-4c1a-883b-c23fd44f0c06","All Good","Yes","No",0,"",0,""
"Vutukuru Venkata Mithilesh","reddy.snigdha0405@gmail.com","https://www.cloudskillsboost.google/public_profiles/c97520a5-4ed8-46d0-9d53-c02d8a8c8590","All Good","Yes","No",0,"",0,""
"D. Pooja Sai Rishitha","poojadasireddy@gmail.com","https://www.cloudskillsboost.google/public_profiles/501eb50d-5f11-4e55-b2be-cf3f0a7024ef","All Good","Yes","No",0,"",0,""
"E. Saketh Reddy","sakethempalla@gmail.com","https://www.cloudskillsboost.google/public_profiles/5acdddbd-56da-4a54-a36a-f1b18950a586","All Good","Yes","No",0,"",0,""
"Poloju Rajavivek","polojurajavivek16@gmail.com","https://www.cloudskillsboost.google/public_profiles/c27309f2-0164-4249-88ea-9d1a0acc4256","All Good","Yes","No",0,"",0,""
"Nitish Narisetti","narisettinitishver3@gmail.com","https://www.cloudskillsboost.google/public_profiles/0f53918a-fad4-4f45-96e6-d08430a95132","All Good","No","No",0,"",0,""
"Baindla Yashwanth Kumar","yeshwanthkumar212@gmail.com","https://www.cloudskillsboost.google/public_profiles/729444d7-75ee-4728-aafc-65695ff5ecb1","All Good","Yes","No",0,"",0,""
"Mengan Rishi Sai","rishirishisai409@gmail.com","https://www.cloudskillsboost.google/public_profiles/f658d4f5-4750-402f-9c71-d9e3c2a45912","All Good","No","No",0,"",0,""
"BVN Charan Kumar","bvncharan26@gmail.com","https://www.cloudskillsboost.google/public_profiles/940ef558-8f32-4e45-8aff-f3677f108e37","All Good","Yes","No",0,"",0,""
"Kuntasa Meeksha","kuntasameeksha14@gmail.com","https://www.cloudskillsboost.google/public_profiles/6c2af96b-3962-4bd4-adc7-766175c7c13e","All Good","Yes","No",0,"",0,""
"Sai Charan Gottipalli","saicharangottipalli@gmail.com","https://www.cloudskillsboost.google/public_profiles/27fd2059-6e7e-4d23-83f9-e121f1bc4996","All Good","No","No",0,"",0,""
"Goda Ketana","ketanagoda@gmail.com","https://www.cloudskillsboost.google/public_profiles/135b8563-9959-4dce-a37a-49b2984ea617","All Good","Yes","No",0,"",0,""
"T Naga Sai Vaibhav","vaibhavgenai1@gmail.com","https://www.cloudskillsboost.google/public_profiles/b9b6b591-c192-492c-8843-645bd3ee78d9","All Good","No","No",0,"",0,""
"Appalabathula Srinivas Surya","srinivassurya2178@gmail.com","https://www.cloudskillsboost.google/public_profiles/9bcb529f-f9e0-4b1b-ac8c-f663342a293c","All Good","Yes","No",0,"",0,""
"Guvvala Yashwanth Abhishek","yashwanthabhishek05@gmail.com","https://www.cloudskillsboost.google/public_profiles/c414d9c3-6113-4246-b568-a16208a26dab","All Good","No","No",0,"",0,""
"Thati Srujan","thatisrujan@gmail.com","https://www.cloudskillsboost.google/public_profiles/83606b4c-4913-4a90-a990-70b24bc30b87","All Good","No","No",0,"",0,""
"Gottiparthi Laxman","laxmangottiparthi@gmail.com","https://www.cloudskillsboost.google/public_profiles/a0a0a5dd-6e0d-49f1-bbec-76c16780b241","All Good","Yes","No",0,"",0,""
"Pachava Haripriya","haripriyapachava@gmail.com","https://www.cloudskillsboost.google.public_profiles/53e098ad-41ff-4dc2-a6dc-2aa5701ba360","All Good","No","No",0,"",0,""
"Vadaparthi Shiva Ganesh","shivaganeshh51@gmail.com","https://www.cloudskillsboost.google.public_profiles/a68b9beb-64f2-4af1-8e9c-0cb676c5eb3b","All Good","No","No",0,"",0,""
"Gowde Spandana","spandanagowde@gmail.com","https://www.cloudskillsboost.google/public_profiles/3e1ab6c2-49fd-4a8a-8f7b-d53fc3abfb30","All Good","No","No",0,"",0,""
"Vyakaranam Ashwini Kruthi","kruthiashwini7@gmail.com","https://www.cloudskillsboost.google/public_profiles/e9ef76af-30a7-4683-9c9a-3e35046d1632","All Good","No","No",0,"",0,""
"G Vismaya Reddy","vismayareddy03@gmail.com","https://www.cloudskillsboost.google/public_profiles/1c6f8348-dccd-4261-9f1e-278958285625","All Good","No","No",0,"",0,""
"K SRI GAYATHRI","gayathrikanna102@gmail.com","https://www.cloudskillsboost.google/public_profiles/a77b009e-0e73-44b9-9225-3f16bdda1a98","All Good","No","No",0,"",0,""
"Shashank Allu","shashank.allu2006@gmail.com","https://www.cloudskillsboost.google/public_profiles/c92f4496-c140-4320-90cf-2e2a24a53574","All Good","Yes","No",0,"",0,""
"Nagasani Sai Aditya Raj","saiadityaraj9@gmail.com","https://www.cloudskillsboost.google/public_profiles/81cea7e4-f6a4-4643-8272-0ead6c67587d","All Good","No","No",0,"",0,""
"Jella Hansika","jellahansika@gmail.com","https://www.cloudskillsboost.google/public_profiles/d41858a1-9ff1-4a24-a3d8-42da7d8cfd48","All Good","No","No",0,"",0,""
"Kusuma Chaitanya","kchaitanya2443@gmail.com","https://www.cloudskillsboost.google/public_profiles/4522cd1b-2d8c-4fa9-b259-cd348468a6c9","All Good","Yes","No",0,"",0,""
"Kolan Sreeja","kolansreejareddy01@gmail.com","https://www.cloudskillsboost.google/public_profiles/dd0a96bb-688f-4889-a094-5a286f191120","All Good","No","No",0,"",0,""
"Venigalla Bhavya Sri","bhavyavenigalla2511@gmail.com","https://www.cloudskillsboost.google/public_profiles/a9e1619a-cf1b-4293-92a9-a522c495bae2","All Good","No","No",0,"",0,""
"Suram Sidhartha Reddy","suramsidharthareddy@gmail.com","https://www.cloudskillsboost.google/public_profiles/65f8a05a-9cd7-43f4-b49d-ec055c7f89f2","All Good","No","No",0,"",0,""
"Shaik Asma","Shaikasma41308@gmail.com","https://www.cloudskillsboost.google/public_profiles/78efdfd1-66ee-4182-8134-63b003e2e8a4","All Good","No","No",0,"",0,""
"PAGILLA NAVEEN KUMAR","pagillanaveenkumar9989@gmail.com","https://www.cloudskillsboost.google/public_profiles/5496e38c-1195-41b7-89f7-2001a2b791b5","Wrong Google Cloud Skills Boost Public Profile URL","Yes","No",0,"",0,""
"Gariga Aadesh","aadeshgariga@gmail.com","https://www.cloudskillsboost.google/public_profiles/b648057e-18db-41d1-a75c-02901fe4d60f","All Good","No","No",0,"",0,""
"Pranathi Sai Mani Gullapalli","pranathi.gullapalli24@gmail.com","https://www.cloudskillsboost.google/public_profiles/953d6743-6389-4378-965f-c34c88294f11","All Good","No","No",0,"",0,""
"DEVARSHINI BEGARI","bdevarshini124@gmail.com","https://www.cloudskillsboost.google/public_profiles/594bb29e-8330-462d-87c0-9c882c727d5e","All Good","No","No",0,"",0,""
"SHAIK MOHAMMED KHALID","khalidz12217@gmail.com","https://www.cloudskillsboost.google/public_profiles/7fc3914a-eb0a-428e-a655-b41eabd40e47","All Good","No","No",0,"",0,""
"Gugulothu Sindhu","gugulothusindhu2005@gmail.com","https://www.cloudskillsboost.google/public_profiles/50b0dd7d-dfc5-4e02-a931-b36117dc0991","All Good","No","No",0,"",0,""
"Ch. Rupak Sujay Varma","sujayxd.vhs@gmail.com","https://www.cloudskillsboost.google/public_profiles/807241df-6254-44b1-a1b0-10c26f31acb8","All Good","No","No",0,"",0,""
"DHARAVAT SAIBHARATH","dharavathsaibharath@gmail.com","https://www.cloudskillsboost.google/public_profiles/0882edd7-6383-417c-9471-4ee08ed6bf88","All Good","No","No",0,"",0,""
"Yeruva InduSri Varshitha Reddy","indu.sri1106@gmail.com","https://www.cloudskillsboost.google/public_profiles/5655fc62-0446-4f36-987d-7359fe449fa0","All Good","Yes","No",0,"",0,""
"P Bhanu Teja","bhanuteja75319@gmail.com","https://www.cloudskillsboost.google/public_profiles/991483a8-6c65-4cc6-8249-a1ee1fc7d344","All Good","No","No",0,"",0,""
"Chandu Rushil Sai Karthik","chandurushilsaikarthik@gmail.com","https://www.cloudskillsboost.google/public_profiles/1fd02d46-e4d6-43a4-9e11-0d7ade2d3bee","All Good","Yes","No",0,"",0,""
"KAMMARI SAI SIDHARTH","kammarisaisidharth@gmail.com","https://www.cloudskillsboost.google/public_profiles/70f19149-227f-4667-b5e1-816c6cda6a16","All Good","No","No",0,"",0,""
"Nandhini Peddapalem","nandhinipeddapalem@gmail.com","https://www.cloudskillsboost.google/public_profiles/64be5276-3717-44b5-9e79-f45f1d07fba2","All Good","Yes","No",0,"",0,""
"Yedla Pooja Sri","poojasri.yedla6@gmail.com","https://www.cloudskillsboost.google/public_profiles/c6fb79ea-a060-45f9-b2f6-7d9b0c3d2d15","All Good","No","No",0,"",0,""
"SALUNKHE DARSHAN","darshansalunkhe7826@gmail.com","https://www.cloudskillsboost.google/public_profiles/df8cf7c2-eb07-4cc4-98d7-e6830899ed65","All Good","No","No",0,"",0,""
"N. Shashank Reddy","shasusrd@gmail.com","https://www.cloudskillsboost.google/public_profiles/f83a835e-a0df-41f1-802b-428b6080fe52","All Good","No","No",0,"",0,""
"Kammari Hasini","hasinikodiganti@gmail.com","https://www.cloudskillsboost.google/public_profiles/c369a1eb-8e56-4f49-a99f-ebdc2b623926","All Good","Yes","No",0,"",0,""
"Mamidisetti Naveen Chand","naveenchandu@gmail.com","https://www.cloudskillsboost.google/public_profiles/3bc8083d-1f74-413b-99be-bab57e64d3a3","All Good","No","No",0,"",0,""
"Borugula Zayba Tarub","zaybatarub@gmail.com","https://www.cloudskillsboost.google/public_profiles/226316e4-6e9f-4c94-becd-fed3d762189c","All Good","No","No",0,"",0,""
"mashettysrujan584@gmail.com","mashettysrujan584@gmail.com","https://www.cloudskillsboost.google/public_profiles/17f6a4c3-b8b0-4115-8e75-b20e8bf7da5a","All Good","No","No",0,"",0,""
"Akshara Pinnoju","pinnojuakshara@gmail.com","https://www.cloudskillsboost.google/public_profiles/56e64e46-c6e5-48c5-ad2d-bcc893810116","All Good","No","No",0,"",0,""
"Aishani Saha","aishanisaha.06@gmail.com","https://www.cloudskillsboost.google/public_profiles/a385b73a-5437-47c2-a5d7-3c30602649a3","All Good","Yes","No",0,"",0,""
"Sattivada Mohan Tarun","mohantarun9347@gmail.com","https://www.cloudskillsboost.google/public_profiles/373dd087-24e9-4938-900b-5b783872747a","All Good","No","No",0,"",0,""
"Bala Arjun Munagala","balaarjunmunagala@gmail.com","https://www.cloudskillsboost.google/public_profiles/4dc0de06-9cc0-4481-9f78-844e075ff99f","All Good","No","No",0,"",0,""
"KADIGIDDA MITHUN REDDY","mithunreddy5704@gmail.com","https://www.cloudskillsboost.google/public_profiles/dce95a5a-3ffc-4acf-876b-8331583a2ec0","All Good","No","No",0,"",0,""
"Akshaya Kama","akshayakama2502@gmail.com","https://www.cloudskillsboost.google/public_profiles/74c0f48e-00d7-442b-81e1-2185ad9170c4","All Good","No","No",0,"",0,""
"Hima bindu Podendla","himabindupodendla@gmail.com","https://www.cloudskillsboost.google/public_profiles/2bacdbe7-4094-4ae6-bda7-34cd474f0b3b","All Good","Yes","No",0,"",0,""
"PAMMI SRINIVAS REDDY","psrinivasreddy2007@gmail.com","https://www.cloudskillsboost.google/public_profiles/dff60b8b-a9f0-4f06-94d2-d78d56497964","All Good","Yes","No",0,"",0,""
"Kandregula Shanmukha shashank","shashank19000@gmail.com","https://www.cloudskillsboost.google/public_profiles/ef700d77-0a98-48d9-a3d2-b59328fff1fb","All Good","Yes","No",0,"",0,""
"AISHIKA","aishika.katakam11@gmail.com","https://www.cloudskillsboost.google/public_profiles/5fffd620-a52f-4166-96b4-cf7acc8f9099","All Good","Yes","No",0,"",0,""
"Kalisetti Rishikesh","Kalisettirishikesh@gmail.com","https://www.cloudskillsboost.google/public_profiles/0ee233e9-d379-45f6-8364-6e5fbf30c248","All Good","Yes","No",0,"",0,""
"DEVARSHINI BEGARI","devarshinibegari@gmail.com","https://www.cloudskillsboost.google/public_profiles/32ddb292-b0bf-4e93-92e5-4d18aae6bbb3","All Good","Yes","No",0,"",0,""
"Prakash adidela","naniprakash12@gmail.com","https://www.cloudskillsboost.google/public_profiles/fd512786-86a6-48c2-836e-c7afd04b47a9","All Good","No","No",0,"",0,""
"Sriramoju Vignesh","vigneshsriramoju905@gmail.com","https://www.cloudskillsboost.google/public_profiles/7c251783-da74-4faf-bda6-0284dfeee5f0","All Good","No","No",0,"",0,""
"GUNNU KISHAN","kishangunnu0697@gmail.com","https://www.cloudskillsboost.google/public_profiles/4049b6b4-b836-4685-aff0-1d3b64c92a73","All Good","No","No",0,"",0,""
"DAYAKAR RAO B","dayab1211@gmail.com","https://www.cloudskillsboost.google/public_profiles/654d74c3-7fd1-4737-b0b9-4c95ee59fbce","All Good","Yes","No",0,"",0,""
"Ayush","ayushrajay2006@gmail.com","https://www.cloudskillsboost.google/public_profiles/bd590c1e-3d89-4abe-83ce-86f5f4effcf3","All Good","No","No",0,"",0,""
"Kadam Samskruthi","kadamsamskruthi26@gmail.com","https://www.cloudskillsboost.google/public_profiles/d32628a4-abf3-48be-88f0-8008f4b6b2b8","All Good","Yes","No",0,"",0,""
"PRANAYA SRI MALTHUM","pranayasri.cloud@gmail.com","https://www.cloudskillsboost.google/public_profiles/","Wrong Google Cloud Skills Boost Public Profile URL","Yes","No",0,"",0,""
"Aishwarya Sri B","aishusri0201@gmail.com","https://www.cloudskillsboost.google/public_profiles/59de440b-8e8e-4f84-b4e1-60356ebd1ecd","All Good","Yes","No",0,"",0,""
"Jagani Harshitha","jaganiharshitha31@gmail.com","https://www.cloudskillsboost.google/public_profiles/6c0682b6-36d0-480c-89fd-3a00703c42c4","All Good","No","No",0,"",0,""
"Chamakuri Uma Hasini","umahasini36@gmail.com","https://www.cloudskillsboost.google/public_profiles/e21454f2-c811-47a3-995c-9db04f8f3036","All Good","No","No",0,"",0,""
"ARUL MARIYA SHERLY","mariyasherly11@gmail.com","https://www.cloudskillsboost.google/public_profiles/e1442471-bd01-42aa-a41e-e2fddd08f178","All Good","No","No",0,"",0,""
"Siri","siri04062005@gmail.com","https://www.cloudskillsboost.google/public_profiles/f03ba18b-1d9e-4ded-b43b-83b6773fd278","All Good","No","No",0,"",0,""
"Rishitha Burra","rishithaburra2@gmail.com","https://www.cloudskillsboost.google/public_profiles/4e827994-54fd-43c3-bb9a-cc88bb0cbe4b","All Good","No","No",0,"",0,""
"Amulya","amulya.mlrit@gmail.com","https://www.cloudskillsboost.google/public_profiles/7a4cb33f-f4a9-449e-a4d0-0e77d771a347","All Good","No","No",0,"",0,""`;

    const parsedData = csvData.split('\n').slice(1).map(row => {
      const columns = row.split(',');
      return {
        name: columns[0].replace(/"/g, ''),
        email: columns[1].replace(/"/g, ''),
        profileStatus: columns[3].replace(/"/g, ''),
        redemptionStatus: columns[4].replace(/"/g, ''),
        skillBadgesCompleted: parseInt(columns[6]),
        arcadeGamesCompleted: parseInt(columns[8])
      };
    });

    setData(parsedData);
  }, []);

  const totalParticipants = data.length;
  const completedRedemption = data.filter(item => item.redemptionStatus === 'Yes').length;
  const totalSkillBadges = data.reduce((sum, item) => sum + item.skillBadgesCompleted, 0);
  const totalArcadeGames = data.reduce((sum, item) => sum + item.arcadeGamesCompleted, 0);

  const chartData = [
    { name: 'Skill Badges', count: totalSkillBadges },
    { name: 'Arcade Games', count: totalArcadeGames },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Typography
  variant="h4"
  gutterBottom
  style={{
    background: 'linear-gradient(90deg, #4285F4 33.33%, #DB4437 33.33%, #DB4437 66.66%, #F4B400 66.66%, #F4B400 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }}
>
  Gen AI Study Jam Progress Dashboard
</Typography>

      <Grid container spacing={3} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Participants</Typography>
              <Typography variant="h5">{totalParticipants}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Completed Redemption</Typography>
              <Typography variant="h5">{completedRedemption}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Skill Badges</Typography>
              <Typography variant="h5">{totalSkillBadges}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Total Arcade Games</Typography>
              <Typography variant="h5">{totalArcadeGames}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom>Completion Statistics</Typography>
      <div style={{ height: '300px', marginBottom: '20px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#1A73E8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <Typography variant="h5" gutterBottom>Participant Details</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Profile Status</TableCell>
              <TableCell>Redemption Status</TableCell>
              <TableCell>Skill Badges</TableCell>
              <TableCell>Arcade Games</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.profileStatus}</TableCell>
                <TableCell>{item.redemptionStatus}</TableCell>
                <TableCell>{item.skillBadgesCompleted}</TableCell>
                <TableCell>{item.arcadeGamesCompleted}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;