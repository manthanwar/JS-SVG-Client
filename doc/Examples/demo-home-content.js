import Fan from './Fan.js';

window.onload = (event) => {
 const homeSplashImage = document.getElementById('homeSplashImage');
 // homeSplashImage.innerHTML = 'changed Again';

 const data = {
  divMainBox: {
   containerId: 'homeSplashImage',
   id: 'divMainBox',
   style: 'border: 0px solid red; padding:10px; '
  },
  divMainObj: {
   style: 'border: 0px solid green; padding:10px;;'
  },
  divMainSvg: {
   style:
    'border: 0px solid blue; padding:10px; margin:-10px; animation: spin 0s linear infinite;'
  },
  divOptions: {
   style: 'display: none;'
  },

  gridOn: false,
  // optionsOn: false,
  numB: 3,
  clrB: 'pink',
  clrH: 'maroon'
 };

 const fan = new Fan(data);
 // fan.obj.divOptions.delete;
};
