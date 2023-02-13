import React from 'react'
import AboutImage from "../src/assets/asset 32.jpeg"


const AboutCard = () => {
  return (
    <>       
    <section class=" body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="about image" src={AboutImage} />
    <div class="text-center lg:w-2/3 w-full about-text">
      <h1 class="title-font sm:text-4xl text-3xl mb-7 font-medium text-gray-900">Our Mission</h1>
      <p class="mb-6" style={{color:"gray"}}>Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.

</p>
      <div class="flex justify-center">
        <button class="inline-flex  bg-indigo-500 border-0 py-2 px-6 focus:outline-none  rounded text-lg about-button">Button</button>
        
      </div>
    </div>
  </div>
</section>
           
         {/* <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
            <div className="col-md-6 col-10 mx-auto about-card-container">
                <div className="about-card">
                  <img src={AboutImage} className="card-img-top" alt="About-Image" />
                </div>
              </div>

              <div className="col-md-6 col-10 mx-auto about-card-container">
                <div className="about-card-text">
                         <h1>Our Mission</h1>
                         <p>Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

         <br /><br /><br /><br /><br />
         
    </>
  )
}

export default AboutCard
