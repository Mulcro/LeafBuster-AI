import React from 'react'
import image from '../images/watermelon-leaf-anthracnose.jpg';
import leafBlotch from '../images/leafBlotch.jpg';
import leafRot from '../images/PLPATH-FRU-07-Black-Rot-Frogeye-Apple-figure-2.png';
import TheosAPI from './theosapi'; 
import logo from '../images/logo.png';
import dvdImg from '../images/1.png';

export default function Home() {
  return (
<div className="body">
        <section className="titleSection">
            <img className="sizingLogo" src={logo}/>
            <h1> Leaf Buster AI</h1>
            <h4>Keep Your Apple Leaves Healthy</h4>
        </section>
        <div className="one">
        <section className="introSection">
            <div className="introText">
            <h2>What Does our Program Do?</h2>
            <p>
                For our HackMerced project, we present Leaf Buster AI. Leaf Buster AI aims to differentiate between two apple leaves diseases, rot and blotch, using image recognition technology. The project involves training an AI model using a dataset of images of apple rot leaves, and leaf blotch. The trained model can then analyze new images of apple leaves and accurately classify them as healthy, rot, or blotched. The project has the potential to help apple farmers quickly identify and treat diseased apples, improving crop yield and reducing waste.
            </p>
            </div>

            <img src={image}/>
        </section>        
        </div>       

        <img className="dividingImg" src={dvdImg} alt="" />
        
        <div className="two">

        

        <section className="functionality">
            <div className='functionText'>
            <h2>What are plant diseases?</h2>
                <p>
                Apple rot leaf is a fungal disease that affects apple trees, and it can cause significant damage to the leaves, leading to reduced yields and decreased quality of the fruit. The infection can occur during any stage of apple development, but it is most common after the fruit has been harvested and is being stored.

            </p>
            <p>Symptoms of apple rot leaves include holes and dry, pale patterns along the leaves. The disease can spread quickly, causing the leaves to eventually decay.</p>


            <p>

            Leaf blotch disease is another fungal disease that affects apple trees, and it can cause significant damage to the tree leaves, leading to reduced photosynthesis and tree growth. The disease is caused by the fungus Venturia inaequalis, which thrives in cool, humid conditions and can overwinter in fallen leaves.

            </p>
            <p>Symptoms of leaf blotch disease include small, dark spots on the leaves of the apple tree, which may eventually merge to form larger blotches. The affected leaves may turn yellow and fall off prematurely, reducing the overall health of the tree. In severe cases, the disease can lead to defoliation, reducing the tree's ability to produce fruit in subsequent years.
​​
            </p>
            <p>Both apple rot and leaf blotch disease can be controlled through a combination of cultural and chemical control measures, such as pruning infected plant material, removing fallen leaves from the orchard, and applying fungicides at appropriate times. It's important to regularly monitor apple trees for signs of disease and take action quickly to prevent the spread of these damaging conditions.

                </p>
            
            </div>
            <div className="parent">
                <div className="child1">
                <img src={leafRot}/>
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

