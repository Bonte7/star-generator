var starType = 'pwrStandard',
          fillColor,
          outlineColor;

   const selectStar = (star) => {
    starType = star;
    // var outlineColorDiv = document.getElementById('outlineColorDiv');
    // if (starType === 'pwrStandard') {
    //   outlineColorDiv.style.display = 'none';
    // } else {
    //   outlineColorDiv.style.display = 'block';
    // }
   }

   const checkColorValue = (color) => {
    
    if (color.indexOf('#') > -1) {
        color = color.replace('#','');
    } 
    return color;
   }

   const getColors = () => {
      fillColor = checkColorValue(document.getElementById('fillColor').value);
      // outlineColor = checkColorValue(document.getElementById('outlineColor').value);
      outlineColor = fillColor;
   }

   function saveSvg(svgEl, name) {
    // svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    var svgData = svgEl;
    var preface = '<?xml version="1.0" standalone="no"?>\r\n';
    var svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
    var svgUrl = URL.createObjectURL(svgBlob);
    var downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = 'powerreviews-star-' + name + '-' + fillColor + '.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

document.getElementById('starType').addEventListener('change',function(evt){selectStar(evt.target.value)})

const createStars = () => {
  getColors();
  starsCode = stars[starType]();
    for (star in starsCode) {
      saveSvg(starsCode[star],star);
    }
};



    let stars = {
      pwrStandard: function() { 
        starCode =  {
          "0": '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="#DEDEDE" width="20" height="20" rx="2"/><path fill="#FFF" d="m10 13.5-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L10 3l2.057 4.168 4.6.669-3.328 3.245.785 4.581z"/></g></svg>',
          "25": '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="#DEDEDE" width="20" height="20" rx="2"/><path d="M2 0h3v20H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="#' + fillColor + '"/><path fill="#FFF" d="m10 13.5-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L10 3l2.057 4.168 4.6.669-3.328 3.245.785 4.581z"/></g></svg>',
          "50": '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="#DEDEDE" width="20" height="20" rx="2"/><path d="M2 0h8v20H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="#' + fillColor + '"/><path fill="#FFF" d="m10 13.5-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L10 3l2.057 4.168 4.6.669-3.328 3.245.785 4.581z"/></g></svg>',
          "75": '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="#DEDEDE" width="20" height="20" rx="2"/><path d="M2 0h13v20H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" fill="#' + fillColor + '"/><path fill="#FFF" d="m10 13.5-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L10 3l2.057 4.168 4.6.669-3.328 3.245.785 4.581z"/></g></svg>',
          "100": '<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="#' + fillColor + '" width="20" height="20" rx="2"/><path fill="#FFF" d="m10 13.5-4.114 2.163.785-4.581-3.328-3.245 4.6-.669L10 3l2.057 4.168 4.6.669-3.328 3.245.785 4.581z"/></g></svg>'
        }
        return starCode;
      },
      pwrOutline: function() {
        starCode =  {
           "0": '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 5500 5500" style="enable-background:new 0 0 5500 5500;" xml:space="preserve"> <style type="text/css"> .background{fill:none;stroke:#' + fillColor + ';stroke-width:300;stroke-miterlimit:10;} </style> <g id="full-star"> <g> <path class="background" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3c47.7,34.5,71.6,17.3,53.4-39.2 L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8L3500.3,2194.5L3500.3,2194.5z"/> </g> </g> </svg>',
          "25": '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 5500 5500" style="enable-background:new 0 0 5500 5500;" xml:space="preserve"> <style type="text/css"> .background{fill:none;stroke:#' + fillColor + ';stroke-width:300;stroke-miterlimit:10;} .fill{fill:#' + fillColor + ';} </style> <g id="full-star"> <path class="background" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3c47.7,34.5,71.6,17.3,53.4-39.2 L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8L3500.3,2194.5L3500.3,2194.5z"/> </g> <g id="star-fill"> <defs> <rect id="SVGID_1_" x="71.5" y="138.5" width="2200" height="5223"/> </defs> <clipPath id="SVGID_00000124137780151124901410000006075114242514697118_"> <use xlink:href="#SVGID_1_"  style="overflow:visible;"/> </clipPath> <g style="clip-path:url(#SVGID_00000124137780151124901410000006075114242514697118_);"> <path class="fill" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3c47.7,34.5,71.6,17.3,53.4-39.2 L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8L3500.3,2194.5L3500.3,2194.5z"/> </g> </g> </svg>',
          "50": '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 5500 5500" style="enable-background:new 0 0 5500 5500;" xml:space="preserve"> <style type="text/css"> .background{fill:none;stroke:#' + fillColor + ';stroke-width:300;stroke-miterlimit:10;} .fill{fill:#' + fillColor + ';} </style> <g id="full-star"> <path class="background" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3 c47.7,34.5,71.6,17.3,53.4-39.2L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8 L3500.3,2194.5L3500.3,2194.5z"/> </g> <g id="star-fill"> <defs> <rect id="SVGID_1_" x="71.5" y="138.5" width="2700" height="5223"/> </defs> <clipPath id="SVGID_00000104671124313787620180000013219368325593173695_"> <use xlink:href="#SVGID_1_"  style="overflow:visible;"/> </clipPath> <g style="clip-path:url(#SVGID_00000104671124313787620180000013219368325593173695_);"> <path class="fill" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3 c47.7,34.5,71.6,17.3,53.4-39.2L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8 L3500.3,2194.5L3500.3,2194.5z"/> </g> </g> </svg>',
          "75": '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 5500 5500" style="enable-background:new 0 0 5500 5500;" xml:space="preserve"> <style type="text/css"> .background{fill:none;stroke:#' + fillColor + ';stroke-width:300;stroke-miterlimit:10;} .fill{fill:#' + fillColor +';} </style> <g id="full-star"> <path class="background" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3 c47.7,34.5,71.6,17.3,53.4-39.2L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8 L3500.3,2194.5L3500.3,2194.5z"/> </g> <g id="star-fill"> <defs> <rect id="SVGID_1_" x="71.5" y="138.5" width="3400" height="5223"/> </defs> <clipPath id="SVGID_00000080916264326569504150000006552783680878411393_"> <use xlink:href="#SVGID_1_"  style="overflow:visible;"/> </clipPath> <g style="clip-path:url(#SVGID_00000080916264326569504150000006552783680878411393_);"> <path class="fill" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3 c47.7,34.5,71.6,17.3,53.4-39.2L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8 L3500.3,2194.5L3500.3,2194.5z"/> </g> </g> </svg>',
         "100": '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 5500 5500" style="enable-background:new 0 0 5500 5500;" xml:space="preserve"> <style type="text/css"> .background{fill:none;stroke:#' + fillColor + ';stroke-width:300;stroke-miterlimit:10;} .fill{fill:#' + fillColor + ';} </style> <g id="full-star"> <path class="background" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3 c47.7,34.5,71.6,17.3,53.4-39.2L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8 L3500.3,2194.5L3500.3,2194.5z"/> </g> <g id="star-fill"> <path class="fill" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3 c47.7,34.5,71.6,17.3,53.4-39.2L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8 L3500.3,2194.5L3500.3,2194.5z"/> </g> </svg>'
        }
        return starCode;
      },
      pwrReverse: function() {
        starCode = {
           "0": '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 5500 5500" style="enable-background:new 0 0 5500 5500;" xml:space="preserve"> <style type="text/css"> .background{fill:#DEDEDE;} </style> <g id="full-star"> <g> <path class="background" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3c47.7,34.5,71.6,17.3,53.4-39.2 L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8L3500.3,2194.5L3500.3,2194.5z"/> </g> </g> </svg>',
          "25": '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 5500 5500" style="enable-background:new 0 0 5500 5500;" xml:space="preserve"> <style type="text/css"> .background{fill:#DEDEDE} .fill{fill:#' + fillColor + ';} </style> <g id="full-star"> <path class="background" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3c47.7,34.5,71.6,17.3,53.4-39.2 L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8L3500.3,2194.5L3500.3,2194.5z"/> </g> <g id="star-fill"> <defs> <rect id="SVGID_1_" x="71.5" y="138.5" width="2000" height="5223"/> </defs> <clipPath id="SVGID_00000124137780151124901410000006075114242514697118_"> <use xlink:href="#SVGID_1_"  style="overflow:visible;"/> </clipPath> <g style="clip-path:url(#SVGID_00000124137780151124901410000006075114242514697118_);"> <path class="fill" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3c47.7,34.5,71.6,17.3,53.4-39.2 L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8L3500.3,2194.5L3500.3,2194.5z"/> </g> </g> </svg>',
          "50": '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 5500 5500" style="enable-background:new 0 0 5500 5500;" xml:space="preserve"> <style type="text/css"> .background{fill:#DEDEDE;} .fill{fill:#' + fillColor + '} </style> <g id="full-star"> <path class="background" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3 c47.7,34.5,71.6,17.3,53.4-39.2L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8 L3500.3,2194.5L3500.3,2194.5z"/> </g> <g id="star-fill"> <defs> <rect id="SVGID_1_" x="71.5" y="138.5" width="2678.5" height="5223"/> </defs> <clipPath id="SVGID_00000104671124313787620180000013219368325593173695_"> <use xlink:href="#SVGID_1_"  style="overflow:visible;"/> </clipPath> <g style="clip-path:url(#SVGID_00000104671124313787620180000013219368325593173695_);"> <path class="fill" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3 c47.7,34.5,71.6,17.3,53.4-39.2L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8 L3500.3,2194.5L3500.3,2194.5z"/> </g> </g> </svg>',
          "75": '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 5500 5500" style="enable-background:new 0 0 5500 5500;" xml:space="preserve"> <style type="text/css"> .background{fill:#DEDEDE;} .fill{fill:#' + fillColor + ';} </style> <g id="full-star"> <path class="background" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3 c47.7,34.5,71.6,17.3,53.4-39.2L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8 L3500.3,2194.5L3500.3,2194.5z"/> </g> <g id="star-fill"> <defs> <rect id="SVGID_1_" x="71.5" y="138.5" width="3350" height="5223"/> </defs> <clipPath id="SVGID_00000080916264326569504150000006552783680878411393_"> <use xlink:href="#SVGID_1_"  style="overflow:visible;"/> </clipPath> <g style="clip-path:url(#SVGID_00000080916264326569504150000006552783680878411393_);"> <path class="fill" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3 c47.7,34.5,71.6,17.3,53.4-39.2L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8 L3500.3,2194.5L3500.3,2194.5z"/> </g> </g> </svg>',
         "100": '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 5500 5500" style="enable-background:new 0 0 5500 5500;" xml:space="preserve"> <style type="text/css"> .background{fill:#DEDEDE;} .fill{fill:#' + fillColor + ';} </style> <g id="full-star"> <path class="background" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3 c47.7,34.5,71.6,17.3,53.4-39.2L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8 L3500.3,2194.5L3500.3,2194.5z"/> </g> <g id="star-fill"> <path class="fill" d="M3500.3,2194.5c-59.2,0-122-45.4-140.2-101.9L2780.8,311.2c-18.2-56.5-47.5-56.5-65.9,0l-578.6,1781.4 c-18.4,56.5-81.2,101.9-140.8,101.9H122.8c-59.2,0-68.6,28.3-20.5,62.8l1515.1,1101.3c48.1,34.6,72.2,108.2,53.8,164.7 l-579.1,1781.3c-18.3,56,5.8,73.8,53.8,38.7l1515.1-1100.7c48.1-35,125.5-35,173.7,0l1515.5,1101.3 c47.7,34.5,71.6,17.3,53.4-39.2L3825,3523.3c-18.2-56.5,5.2-130.2,53.4-164.7L5394,2257.3c47.7-34.6,38.7-62.8-20.4-62.8 L3500.3,2194.5L3500.3,2194.5z"/> </g> </svg>'
        }
        return starCode;
      }


  };
    const myForm = document.getElementById("myForm");



    myForm.addEventListener("submit", function (e) {
      e.preventDefault();
      createStars() 
    });