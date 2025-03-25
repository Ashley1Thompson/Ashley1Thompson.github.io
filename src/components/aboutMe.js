import '../styles/App.css';
import React from 'react';
import Archer from '../assets/images/archercarrot.jpg';
import Ray from '../assets/images/raymlem.jpg';
import Me from '../assets/images/sittingonrock.jpg';
import Dig from '../assets/images/fieldwork.jpg';
import Hiking from '../assets/images/hiking.jpg'
import Puppy from '../assets/images/puppylove.jpg'
import Shot from '../assets/images/shot.jpg'


function AboutMe() {
  return (
//return about me page html
<>
    <div className='aboutHeader'>
    what a long strange trip it's been...
    </div>
    <div className='aboutCard'>
        <img 
          className='img1'
          src={Me} 
          width={250} 
          height={250} 
          alt="woman sitting on rock outdoors"
        />;
    </div>
    <div className='aboutCard'>
      <p className='p1'> As you remember from my header image, I'm Ashley. I am a Full-stack software engineer, dog enthusiast, woman of science, and mother of two.</p>
    </div>
    <div className='aboutCard'>
        <img 
          className='img1'
          src={Dig} 
          width={250} 
          height={250} 
          alt="three people using a sifter in the field"
        />;

        
    </div>
    <div className='aboutCard'>
      <p className='p1'> I began my higher education at Gainesville State College where I earned an A.A. in Anthropology. I met an amazing, inspirational mentor and life-long friend who introduced me to my first love: Archaeology.
        <br/> <br/> After transferring to UGA, I completed my B.A in Anthropology with a minor in Geology and a certificate in Archaeology. It was official. I was an "ologist". I spent the next decade digging in the dirt, just as nature intended.
        </p>
    </div>
    <div className='aboutCard'>
        <img 
          className='img1'
          src={Ray} 
          width={250} 
          height={250} 
          alt="red goldendoodle licking her nose"
        />;
    </div>
    <div className='aboutCard'>
      <p className='p1'> During my post-college years I did what one does and got a dog to keep me company. This is Aurelia, my elderly goldendoodle and best friend. </p>
    </div>
    <div className='aboutCard'>
        <img 
          className='img1'
          src={Hiking} 
          width={250} 
          height={250} 
          alt="Ashley standing with two children on mountain overlook"
        />;
    </div>
    <div className='aboutCard'>
      <p className='p1'> At some point in all of the madness, I met my husband and we now have two awesome kids who accompany us on our adventures. </p>
    </div>
    <div className='aboutCard'>
        <img 
          className='img1'
          src={Archer} 
          width={250} 
          height={250} 
          alt="cream goldendoodle with toy carrot"
        />;
    </div>
    <div className='aboutCard'>
      <p className='p1'> we got another dog to match our first one; Archer the goldendoodle. </p>
    </div>
    <div className='aboutCard'>
        <img 
          className='img1'
          src={Shot} 
          width={250} 
          height={250} 
          alt="Ashley in PPE getting vaccinated"
        />;
    </div>
    <div className='aboutCard'>
      <p className='p1'> When the pandemic hit, I was transitioning out of archaeology, and I took a role as a Lifestyle Director in long-term care. This was the most emotionally challenging role, professionally, that I've ever had. We endured so much, learned so much, and will never take another day for granted. </p>
    </div>
    <div className='aboutCard'>
        <img 
          className='img1'
          src={Puppy} 
          width={250} 
          height={250} 
          alt="Ashley with young puppy on chest"
        />;
    </div>
    <div className='aboutCard'>
      <p className='p1'> After leaving the healthcare sector when COVID started to settle down in 2021, I was lost. I had left my dream career, and had been thoroughly traumatized by my experience in LTC. I needed a new dream. Through the encouragement of my family and friends, I joined a cohort at the Georgia Tech Full-Stack Developer Bootcamp. And now I'm here, with a new passion, a new direction, and something to look forward to every day. </p>
    </div>
    <div className='aboutCard'> 
        <p className='p1'>I do still snuggle puppies whenever possible, because that will never change. </p>
    </div>
    
</>  
  );
}


export default AboutMe;