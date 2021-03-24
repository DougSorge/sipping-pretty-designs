// //this will be where all of the selecting will be done.
// let imgs = document.getElementsByClassName('img'); //semi misleading, these are divs, but they act as imgs for our purposes
// let modal = document.querySelector('.modal');
// let modalImg = document.querySelector('#modalImg');
// let imgDescrip = document.querySelector('#imgDescription');




// //setting id's for images in the grid in preparatioin to display descriptions.
// for(let i = 0; i < imgs.length; i++){
//   imgs[i].setAttribute('id', (i + 1));
// }

// //since the images were tricky and required a workaround to display nicely, finding a way to display them in the modal also required a workaround. 
// //the if statement is another product of the images provided being mismatched jpgs. They look TERRIBLE on small screens I need to find a way to resize them to look good or this is going to be the ongoing soution.
// if(window.innerWidth >= 907){
//   for (let img of imgs) {
//     img.addEventListener('click', (e) => {
//       console.log(e);
//       modal.classList.remove('hide');
//       setSrc(extractUrl(e));
//       imgDescrip.textContent = imageDataBase[e.target.id].description;
//     })
//   }
// } 

// // Luckily, I was able to extract the file path from the inline styling attribute. I was able to examine to event object, isolate the data we were looking for (which was the background image url) and slice off everything but the file path itself.
// function extractUrl(e) {
//   let newSrc = e.target.attributes.style.nodeValue;
//   let slicedSrc = newSrc.slice(23, -2);
//   return slicedSrc;
// }

// // after slicing the correct characters from the inline styling we could insert the target imgs file path into the placeholder img src attribute within the modal.
// function setSrc(newSrc) {
//   modalImg.src = newSrc;
// }



// // setting eventListener to close the modal on click.
// modal.addEventListener('click', (e)=>{
//   modal.classList.add('hide');
// })


let imageDataBase = {
  1: { 
      // src :'images/mainDisplay.jpg',

      description: 'This Display was one of the many set up at Junction Boutique. I have a wide variety of beautiful designs to memorialize any occasion you can think of!'
  },
  2: {
    //  src : 'images/brideGroom2.jpg',

     description: 'Each one of my Bride and Groom pieces are unique. I take pride in delivering a special set of glasses that match the attire chosen by for that special day. Especially those beautiful dresses!'
  },
  3 : {
    // src : 'images/harryPotterCollection.jpg',
    description : 'This Harry Potter collection is sure to delight the HogWarts fans in your life. I can design a set for whatever your favorite series may be! All you have to do is ask!'
  },

  4 : {
    // src : 'images/marchingBand.jpg',
    description : 'These cups were made for a local High Schools marching band. I can make items designed with your favorite teams or even your company / organizations logo!'
  },

  5 : {
    // src : 'images/brideGroom1.jpg',
    description : 'Beautiful newly-weds enjoying champagne from their Sipping Pretty dopplegangers!'
  },

  6 : {
    // src : 'images/keepsakeBox1.jpg',
    description: 'These keepsake boxes are a perfect item to remember special moments in life. Customized with your choice of name and color.'
  },

  7 : {
    // src : 'images/mermaidWall.jpg',
    description: 'I had never done a wall mural before this but I impressed myself! A lot of hard work went into this piece. My beautiful mermaid is now a permanent part of the Junction Boutique'
  },

  8 : {
    // src : 'images/thinBlueLine.jpg',
    description: 'This thin blue line design is a reminder of what our Police and other first responders sacrifice to make society possible for the rest of us.'
  },

  9 : {
    // src : 'images/keepsakeBox2.jpg',
    description: 'This was my first keepsake box made for my lovely God-Son Adam. Adam was born blind but this box will help him to look back on his earliest moments here on Earth!'
  },

  10 : {
    // src : 'images/mermaidTail.jpg',
    description: 'Mermaid Tail wine bottle and Wine Glass set. Even when the beach is far away, we can at least pretend with a beach themed drink!'
  },

  11 : {
    // src : 'images/puppyLove.jpg',
    description: 'Puppy Love is often the best love! Valentines day is around the corner and I love to create designs for all of you happy couples!'
  },

  12: {
    // src : 'images/starWarsColelction.jpg',
    description: 'Make sure that the Force is always with you by ordering a set of these Star Wars pint glasses. If you do\'nt see your favorite character just tell me who draw!'
  }  
}
