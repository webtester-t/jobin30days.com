
/* =====================
   MOBILE MENU
===================== */
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        mobileMenuBtn.innerHTML = mobileNav.classList.contains('active')
            ? '<i class="fas fa-times"></i>'
            : '<i class="fas fa-bars"></i>';
    });

    document.querySelectorAll('#mobileNav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
}

/* =====================
   FAQ ACCORDION (Animated)
===================== */
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        const answer = item.querySelector('.faq-answer');

        const openItem = document.querySelector('.faq-item.active');
        if (openItem && openItem !== item) {
            openItem.classList.remove('active');
            openItem.querySelector('.faq-answer').style.maxHeight = null;
        }

        item.classList.toggle('active');

        if (item.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = null;
        }
    });
});

/* =====================
   CONTACT FORM
===================== 
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        alert('Thank you for your message! We will respond within 24 hours.');
        contactForm.reset();
    });
}
*/
/* =====================
   SMOOTH SCROLL
===================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        window.scrollTo({
            top: target.offsetTop - 90,
            behavior: 'smooth'
        });
    });
});

/* =====================
   TESTIMONIALS LOAD MORE
===================== */
const testimonials = [
    {
        id: 1,
        name: "Pratibha Gupta",
        role: "HR Executive",
        content: "I am pleased to recommend Priyojeet Dey as an exceptional mentor. His approach is practical, structured, and always focused on helping others grow in the right direction.<br>What truly stands out about Priyojeet is his approachability. He never hesitates to offer support, whether it's a quick doubt, career clarity, or detailed guidance. His calm demeanor and positive attitude make the learning experience......",
        initials: "PG"
    },
    {
        id: 2,
        name: "Jyoti Tiwari",
        role: "Data Scientist",
        content: "\"𝗔 𝘁𝗿𝘂𝗲 𝗹𝗲𝗮𝗱𝗲𝗿 𝗱𝗼𝗲𝘀𝗻’𝘁 𝗰𝗿𝗲𝗮𝘁𝗲 𝗳𝗼𝗹𝗹𝗼𝘄𝗲𝗿𝘀, 𝘁𝗵𝗲𝘆 𝗰𝗿𝗲𝗮𝘁𝗲 𝗺𝗼𝗿𝗲 𝗹𝗲a𝗱𝗲𝗿𝘀'' <br>Priyojeet isn’t just a mentor, he’s a game-changer. From interview preparation to CV review, LinkedIn optimization, and personal growth strategies, he went above and beyond, making my journey feel like his own. Despite being a stranger at first, he showed the kind of dedication and support that even close ones might not offer. <br>His deep expertise......",
        initials: "JT"
    },
    {
        id: 3,
        name: "Sanjana Karla",
        role: "Chartered Accountant",
        content: "Priyojeet has been a tremendous help in refining my resume. I appreciate his supportive and approachable nature, making the process feel collaborative. Priyojeet’s constructive feedback and guidance gave me the confidence to present my skills effectively.  I highly recommend him to anyone looking to enhance their resume and improve their chances in the job market!",
        initials: "SK"
    },
    {
        id: 4,
        name: "Vijeta Kumari",
        role: "Content Marketing Expert",
        content: "I had the opportunity to be mentored by Priyojeet, and it has genuinely been a game-changer. I never thought I would enroll in JOB IN 30 DAYS™, but when he reached out, something told me to give it a chance and I’m so glad I did. From day one, Priyojeet helped me build a high-impact, ATS-friendly, and results-driven resume that recruiters actually look for. We then optimized my LinkedIn profile, and he introduced me to several job search strategies......",
        initials: "VK"
    },
    {
        id: 5,
        name: "Ishika Singh",
        role: "Business Analyst",
        content: "I am grateful to have had the opportunity to learn from Priyojeet, whose guidance has been incredibly valuable in my job search journey. He conducted a detailed session with me on how to approach job searching, structure interview responses, and build an effective job search strategy. The session was completely free, yet he invested his full effort and ensured that every point was clear and actionable. What stands out the most is his sincerity and punctuality. He approaches mentoring.......",
        initials: "IS"
    },
    {
        id: 6,
        name: "Neetu Anand",
        role: "Global Client Relationship & Growth Leader",
        content: "Priyojeet recently mentored me through my job search, and what impressed me most was how selflessly he devoted over 8 hours across multiple sessions to guide me. He shared ready-to-use tricks for CV review, LinkedIn optimization, and interview prep that I had never come across before, and they added immediate value. From job search strategy to mock interviews, his advice was practical, structured, and easy to apply. Truly grateful for his generosity and guidance.",
        initials: "NS"
    },
    {
        id: 7,
        name: "Samriti",
        role: "AWS Certified Cloud Practitioner",
        content: "I feel truly grateful to have had the opportunity to learn from You , who not only taught me with full dedication but also without expecting anything in return. The way you shared your knowledge so openly and wholeheartedly has deeply inspired me. Before attending their sessions, I was unaware of so many important concepts, but with your guidance, I realised how much more there is to learn. Every session opened my eyes to new ideas and possibilities. What makes him truly special is not just his knowledge, but his kindness, patience, and genuine desire.... ",
        initials: "SA"


    },
    {
        id: 8,
        name: "Priyanshi Jain",
        role: "HR Head",
        content: "I connected with him a few days ago and started my training journey with him and trust me that was the best experience I had so far I didn't expected this much when I got connected but as soon as he started with the training I came to know he is best trainer I could ever have and once you will work with him you will come to know what a amazing person he is and he have a lot of knowledge on each topic I could speak.",
        initials: "AK"
    },
    {
        id: 9,
        name: "Kashvi Verma",
        role: "Frontend Developer",
        content: "I connected with Priyojeet a few months back looking for someone to mentor me and help me with my career growth. I learned loads of new things not just about how to get a job but also cleared my vision in various things. I came with a basic resume just looking for a job, he helped me understand how things actually work out, how to preset yourself, how i should plan and prepare for my future, what things i should focus on and many more. I am still connected to him and looking forward to staying connected for sure 💯",
        initials: "KV"
    },
    {
        id: 10,
        name: "Rajiv Ladhani",
        role: "Prince2 Certified Project Head",
        content: "I consider myself incredibly fortunate to have had Priyojeet as a mentor during a pivotal phase of my career. His guidance helped me navigate complex challenges.",
        initials: "RL"
    },
    {
        id: 11,
        name: "Gargi Prajapat",
        role: "HR Executive",
        content: "Priyojeet sir is a very kind person, and I personally like the way he guides and helps me. Whenever I need help, he is always there for me. He never treats me as if he is just my mentor. I feel like he is a family member who always guides and supports me. I have never seen a mentor like Priyojeet sir. Thank you for being my mentor and guiding me in my career. I'm very grateful to have you in my life.",
        initials: "GP"
    },
    {
        id: 12,
        name: "Priti Agarwal",
        role: "Chartered Accountant",
        content: "He is really gem of a person. Priyojeet sir's depth of industry knowledge, combined with his genuine commitment to helping others succeed, makes him an outstanding mentor.  He took the time to understand my career aspirations and offered targeted advice that helped me refine my approach to job searching. His suggestions on preparing for interviews, and identifying promising opportunities are invaluable......",
        initials: "PA"
    },
    {
        id: 13,
        name: "Mahima Birla",
        role: "Chartered Accountant",
        content: "He is good mentor helps me to improve my skills. Their guidance often brings clarity and boosts confidence, making a huge difference, especially in challenging areas. Their support can turn difficult topics into manageable ones and helps me to build skills.",
        initials: "MB"
    },
    {
        id: 14,
        name: "Ankisha Dey",
        role: "Finance Executive",
        content: "I recently had a transformative mentoring session with Priyojeet Dey, whose expert guidance on CV optimization and LinkedIn profiling significantly enhanced my job prospects. His supportive and results-driven approach empowered me to achieve my career goals, and I highly recommend him for his expertise and dedication to helping professionals succeed.",
        initials: "SI"
    },
    {
        id: 15,
        name: "Sakshi Jindal",
        role: "Chartered Accountant",
        content: "It was a golden opportunity for me to attend the sessions and get mentored by Priyojeet sir. His unwavering support and guidance on various topics related to job was really helpful. His tips and tricks to find the jobs is the best part of the whole session. I am really grateful to you sir.",
        initials: "SJ"
    },
    {
        id: 16,
        name: "Riya Jain",
        role: "Financial Analyst",
        content: "I wanted to take a moment to express my gratitude for the incredible value your sessions provided. Your guidance on CV review and LinkedIn profile optimization was transformative and gave me practical insights that I'll carry forward in my career. Your engaging and personalized teaching style made every session not only informative but also highly impactful. I truly appreciated how you tailored your feedback to individual needs, creating a supportive learning environment. Thanks to your mentorship, I've acquired skills that will undoubtedly benefit my professional journey.",
        initials: "RJ"
    },
    {
        id: 17,
        name: "Disha Prajapat",
        role: "Content Moderator",
        content: "I had the privilege of attending Priyojeet Sir's sessions, and I must say, they were incredibly enlightening. Through his expert guidance, I gained valuable insights on CV review and LinkedIn profile optimization. Sir's teaching style is engaging, informative, and tailored to meet individual needs. His supportive and helpful nature made the learning experience truly exceptional. I acquired numerous skills and knowledge that will undoubtedly benefit my professional growth. I highly recommend Priyojeet Sir's sessions to anyone seeking to enhance their skills and professional online presence.",
        initials: "DP"
    },
    {
        id: 18,
        name: "Riyamerin Roymon",
        role: "HR Intern",
        content: "I am deeply grateful to Priyojeet Dey for his invaluable guidance in refining both my resume and LinkedIn profile. His keen eye for detail helped me identify areas for improvement, and his constructive feedback allowed me to correct those shortcomings. Priyojeet Sir also enhanced my resume, giving it a polished, professional touch. For anyone seeking expert advice on resume building or LinkedIn optimization, I highly recommend Priyojeet Sir's guidance.",
        initials: "RR"
    },
    {
        id: 19,
        name: "Reet Chandra ",
        role: "Manager - Video Content",
        content: "Mr. Priyojeet has been an outstanding mentor, offering unwavering guidance throughout my career journey, particularly in resume screening and overall professional development. His thoughtful insights and strategic advice have played a pivotal role in refining my skills, boosting my confidence, and helping me make informed decisions about my career path. His commitment to my growth has been truly transformative, and I am sincerely grateful for his continuous support. I wholeheartedly recommend Mr. Priyojeet to anyone looking for expert guidance and mentorship in their career progression.",
        initials: "RC"
    },
    {
        id: 20,
        name: "Pragya Pathak",
        role: "Assistant Manager - BD",
        content: "I wholeheartedly recommend Priyojeet Dey for their exceptional guidance in CV and LinkedIn profile optimization. Their insights helped me craft a standout CV and create an engaging LinkedIn presence that effectively showcases my skills. With Priyojeet Dey mentorship, I gained the tools to attract valuable opportunities. If you're seeking to enhance your professional profile, look no further!",
        initials: "PP"
    },
    {
        id: 21,
        name: "Barnali Chakraborty",
        role: "Operations Manager ",
        content: "I am fortunate enough to have been mentored by Priyojeet sir. His guidance has helped me to find out the loopholes that I had and the ways to correct them. From refining my CV and optimizing my LinkedIn profile to offering insightful strategies for job searching, hats off to his determination.  Mr. Priyojeet is not only a skilled career master but also a genuinely kind and supportive person who is invested in the success of those he mentors.",
        initials: "BC"
    },
    {
        id: 22,
        name: "Ahmad Rameez",
        role: "Account Manager",
        content: "Mr. Priyojeet has been an incredible mentor, guiding me through resume screening and offering valuable advice for my career growth. His insights and support have been instrumental in improving my skills and helping me navigate my professional path. I'm truly grateful for his guidance and highly recommend him to anyone seeking career advice.",
        initials: "AR"
    },
    {
        id: 23,
        name: "Dr. Geeta Shukla",
        role: "Founder of Mindful Counselors",
        content: "I highly recommend Mr. Dey for his professional attitude and exceptional assistance in improving my CV and profile. His attention to detail, timely communication, and insightful feedback greatly enhanced my documents, reflecting his commitment to excellence and quality.",
        initials: "GS"
    },
    {
        id: 24,
        name: "Afreen Khanum",
        role: "Program Coordinator",
        content: "I'm grateful to Mr. Priyojeet for his guidance in both resume screening and my career growth. His advice has been practical, insightful, and really helping me to improve my skills. He's approachable and supportive, making a big impact on my professional development. Highly recommend him to anyone looking for great mentorship in any profession!",
        initials: "AK"
    },
    {
        id: 25,
        name: "Anish Kumar Sah",
        role: "Senior Customer Executive ",
        content: "Priyojeet has been an invaluable asset to my professional development. His expert guidance and mentorship were instrumental in securing my desired position. I highly recommend his services as a consultant and mentor. Furthermore, his affable and approachable nature makes him an exceptional resource for anyone seeking support and advice. I am fortunate to have him as a valuable connection within my professional network.",
        initials: "AK"
    },
    {
        id: 26,
        name: "Sandhyarani Jena",
        role: "Software Enginee",
        content: "I had the opportunity to attend Priyojeet Sir session, and it was incredibly helpful. His expertise in job search strategies and the practical advice he provided greatly boosted my confidence in navigating the job market. His insights helped me enhance my profile, making it more professional. I am grateful to have him as a mentor. Thank you, Sir, for your guidance and support. I highly recommend Priyojeet Sir to anyone seeking valuable career advice.",
        initials: "SJ"
    },
    {
        id: 27,
        name: "Shalini Nakshathira",
        role: "Analyst",
        content: "I had the pleasure of attending Priyojeet Dey's session, and it was truly a game-changer for me. His expertise in job search strategies and his passion for helping others shine through in every aspect of his work. The practical tips and insights he shared were incredibly valuable and have significantly boosted my confidence in navigating the job market. Priyojeet's ability to break down complex concepts into actionable steps is remarkable. I highly recommend Priyojeet to anyone looking to enhance their job search skills and career prospects. Thank you, Priyojeet, for your exceptional guidance!",
        initials: "SN"
    },
    {
        id: 28,
        name: "Divita Chavan ",
        role: "Strategic Business Leader",
        content: "Priyojeet is extremely knowledgeable and is very helpful . He has a huge professional experience and shares valuable inputs for one's professional journey. He is a value enabler. He has a huge network and has an outstanding ability to connect with people across markets. He has been very helpful in streamlining my profile  and I look forward to continued association with him. My best wishes are with him.",
        initials: "DV"
    },
    {
        id: 29,
        name: "Prachi Jain",
        role: "Associate Analyst",
        content: "I highly recommend Priyojeet Sir for the the session. All the tips he mentioned was immensely helpful and helped me  to grab a job. His critical analysis made my profile professional. I am glad to have a mentor like him. Thank you sir for your guidance and support.",
        initials: "PJ"
    },
    {
        id: 30,
        name: "Poonam Pathania",
        role: "PGT Chemistry",
        content: "Priyojeet Sir is exceptionally helpful and dedicated to his work, always performing tasks professionally and on time. He optimized my profile and provided invaluable support and guidance. His deep expertise and genuine passion for mentoring have significantly boosted my confidence. I highly recommend him as a mentor for anyone seeking to achieve their goals.",
        initials: "PP"
    },
        {
        id: 31,
        name: "Trupti Godse",
        role: "Clinical Data Coder",
        content: "Priyojeet Sir is exceptionally helpful and dedicated to his work, always performing tasks professionally and on time. He optimized my profile and provided invaluable support and guidance. His deep expertise and genuine passion for mentoring have significantly boosted my confidence. I highly recommend him as a mentor for anyone seeking to achieve their goals.",
        initials: "TG"
    },
        {
        id: 32,
        name: "Palak Chaudhary",
        role: "IPCW'25 & Co-Founder",
        content: "Priyojeet is a really a very helpful person. He is very dedicated towards his work and do all the things on time and very professionally. He helped me in optimisming my profile and reviewed my CV which was very helpful for me. He is very supportive and understanding. He guided me throughout the path. I strongly recommend him as a mentor.",
        initials: "PC"
    },
        {
        id: 33,
        name: "Anjali Kurmi",
        role: "Educator",
        content: "I am happy to recommend Mr. Priyojeet for his role as a Mentor. He has been an invaluable source of guidance and support for me. His deep expertise, dedication and genuine passion in mentoring individuals and his sense of understanding makes him an incredible being. I have not only developed my skills and knowledge in Human Resources, but I have also gained confidence in my abilities and clearer sense of direction for my career.  I'm truly grateful for the impact he has had on my Personal and professional development. I highly recommend him as a mentor for anyone looking to seek guidance and achieve his goal.",
        initials: "AK"
    },
        {
        id: 34,
        name: "Shweta Shukla",
        role: "Software Engineer",
        content: "Mr. Priyojeet is a highly skilled and knowledgeable person. He is not only friendly and helpful but also goes above and beyond to maintain the good connection between him and the client. Moreover, I have seen him working his way through challenges and crises. He uses innovative approaches to tackling and solving problems. He helped me to crack my job interview. He is such an inspiration for me, and I feel proud to have worked under his guidance.",
        initials: "SS"
    },
        {
        id: 35,
        name: "Bhagyalakshmi Pallath",
        role: "School Principal",
        content: "I must thank the LinkedIn network for giving me an opportunity to get connected with Priyojeet Dey. He helped me a lot in my job search by making a strategic plan and consistent follow-up.  Priyojeet is a kind, easy-to-approach person and gives attention to every detail.  Still, my search is on but having full confidence that I will land my dream job very soon.  Thank you Priyojeet.",
        initials: "BP"
    },
        {
        id: 36,
        name: "Mohammad Ekramul Hoda",
        role: "Sr Lead Consultant",
        content: "I strongly recommend Priyojeet Dey as a guide, a mentor who goes the extra mile to help his mentees to coach them in achieving their career objectives. He is friendly and always ready to support you in times of need. His technical and interpersonal skills are remarkable.",
        initials: "EH"
    },
        {
        id: 37,
        name: "Rubina Shaikh",
        role: "English Teacher",
        content: "A great soul and coach. Priyojeet has a knack for making friends and lasting relationship.  His interpersonal skills gives him a deep understanding of the happenings around which makes him the best guide. Being selfless human being he always thinks for the betterment of the people around him. His dedication towards his work always yields fruitful results. He is far sighted. He has a different kind of  inquisitiveness.",
        initials: "RS"
    },
        {
        id: 38,
        name: "Yerra Usha Rani",
        role: "English Teacher",
        content: "He is a great man who inspired many that nothing is impossible. Helped me in finding the dream job. A mentor, philosopher and a guide who always belives that life is hard so go get your goal.",
        initials: "YUR"
    },
        {
        id: 39,
        name: "Dr.(H.C)Abha Jadhav",
        role: "School Director",
        content: "Priyojeet is just like an angel to those who are doing job hunting. The way Priyojeet guided me to get my desired job is simply superb. I strongly recommend him as a guide, mentor and an awesome job consultant. Apart from this, Priyojeet is also a kind, humble, down to earth person always ready to support you in times of need. It's really great to have Priyojeet in my connection and friend's list.",
        initials: "AJ"
    }
];

let currentTestimonialIndex = 0;
const testimonialsPerLoad = 9;
const testimonialContainer = document.getElementById('testimonial-container');
const loadMoreBtn = document.getElementById('load-more-btn');

function renderTestimonials(startIndex, count) {
    const endIndex = Math.min(startIndex + count, testimonials.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const testimonial = testimonials[i];
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.innerHTML = `
            <div class="testimonial-content">
                <p>${testimonial.content}</p>
            </div>
            <div class="testimonial-author">
                <div class="author-avatar">${testimonial.initials}</div>
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
                <a href="https://www.linkedin.com/in/priyojeetdey/details/recommendations/" target="_blank" class="linkedin-icon"><i class="fab fa-linkedin"></i></a>
            </div>
        `;
        testimonialContainer.appendChild(testimonialCard);
    }
    
    currentTestimonialIndex = endIndex;
    
    // Hide load more button if all testimonials are displayed
    if (currentTestimonialIndex >= testimonials.length) {
        loadMoreBtn.style.display = 'none';
    }
}

// Initialize with first 9 testimonials
renderTestimonials(0, testimonialsPerLoad);

// Load more button event listener
loadMoreBtn.addEventListener('click', () => {
    renderTestimonials(currentTestimonialIndex, testimonialsPerLoad);
});
