import React from 'react'
import image from '../images/watermelon-leaf-anthracnose.jpg';
import leafBlotch from '../images/Necrotic_leaf_blotch1-WWT-A.jpg';
import leafRot from '../images/PLPATH-FRU-07-Black-Rot-Frogeye-Apple-figure-2.png';
import TheosAPI from './theosapi'; 

export default function Home() {
  return (
    <div className="body">
        <h1>Welcome to our Plant Disease Detector</h1>
        {/* insert gif here */}
        <div className="one">
        <section className="introSection">
            <div className="introText">
            <h2>What are plant diseases?</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores non illo expedita obcaecati, officia deserunt molestias laborum assumenda voluptatum dolore? Numquam, voluptatibus? Saepe adipisci accusamus iste eum eligendi voluptatem delectus!
            </p>
            </div>

            <img src={image}/>
        </section>        </div>          
        <div className="colorBand"></div>
        <div className="colorBand2"></div>
        <div className="two">
        <section className="functionality">
            <div className='functionText'>
            <h2>What Does our Program Do?</h2>
                <p>
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aliquid blanditiis, culpa praesentium odio animi sint commodi officiis, accusamus eligendi hic inventore rem ipsa similique aspernatur dicta iure tempora. Quibusdam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure distinctio molestiae unde, accusantium id hic nulla repellendus earum aspernatur quo vel velit, illo tempora doloremque, totam laborum nesciunt nemo. Nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae maxime blanditiis ipsum magni saepe sint facilis quia labore ipsam nostrum, sunt deserunt accusantium, laudantium, autem laboriosam rem totam! Corrupti, modi!
            </div>
            <div className="parent">
                <div className="child1">
                <img src={leafRot} alt="" />
                <p className="child1txt">
                    Apple Rot Leaf
                </p>
                </div>
                <div className="child2">
                <img src={leafBlotch} alt="" />  
                <p className="childwtxt">
                    Leaf Blotch
                </p>
                </div>
            </div>

            <h3>Upload your image here and find out what disease your plant has!</h3>
            <TheosAPI/> 
        </section>
        
        </div>
    </div>
  )
}

