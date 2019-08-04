CSSPlugin.useSVGTransformAttr = true;

function rndm(min, max) {
  return Math.random() * (max - min) + min;
}
//REVERSE SHATTER NAME
// {repeat: 2, repeatDelay: 0.25, yoyo: true}

var nametl = new TimelineMax();

const namesvg = $("svg *");

$.each($(namesvg), function(i, el) {
  nametl.set($(this), {
    x: '+=' + rndm(-1024, 1024),
    y: '+=' + rndm(-1024, 1024),
    scale: 0,
  });
});

nametl.staggerTo(namesvg, 3, {
  x: 0,
  y: -100,
  scale: 1,
  rotation: 0,
  ease:  Power4.easeInOut
}, 0.01);


const icon = $(".icon");
const phoneinfo = $(".contactinfo1");
const emailinfo = $(".contactinfo2");
const gitinfo = $(".contactinfo3");
const gitlink = $(".contactinfo3 > a");

var contacttl = new TimelineMax();
contacttl.staggerFrom(icon, 0.5, {
  delay: 1.8,
  scale: 0,
  ease: Expo.easeOut
}, 0.25);

contacttl.from(phoneinfo, 1.4, {
  delay: -0.3,
  x: -184.55,
  ease: Power2.easeInOut
});

contacttl.from(emailinfo, 2.39, {
  delay: -0.7,
  x: -306.667,
  ease: Power2.easeInOut
});

contacttl.from(gitinfo, 2.52, {
  delay: -1.2,
  x: -322.75,
  ease: Power2.easeInOut
});
// contacttl.set(gitlink, {css:{zindex:1}})


const skilltitle = $(".skillwrap > h3");
const skillline = $(".skills > .line")

const langtitle = $(".lang > h4");
const langp = $(".lang > p");

const databtitle = $(".datab > h4");
const databp = $(".datab > p");

const vercontitle = $(".vc > h4");
const verconp = $(".vc > p");

const designtitle = $(".design > h4")
const designp = $(".design > p")

const skilltitles = [langtitle, databtitle, vercontitle, designtitle]
const skillps = [langp, databp, verconp, designp]

var skilltl = new TimelineMax();
skilltl.from(skillline, 1, {
  delay: 6.5,
  scaleX: 0,
  transformOrigin: "right"
})
skilltl.from(skilltitle, 0.5, {
  y:30
})

skilltl.from(skilltitles, 1.5, {
  opacity: 0,
  x: 100,
})

skilltl.staggerFrom(langp, 1, {
  opacity: 0, 
  x: 100,
}, 0.2)
skilltl.staggerFrom(databp, 1, {
  opacity: 0, 
  x: 100,
}, 0.2)
skilltl.staggerFrom(verconp, 1, {
  opacity: 0, 
  x: 100,
}, 0.2)
skilltl.staggerFrom(designp, 1, {
  opacity: 0, 
  x: 100,
}, 0.2)





const projtitle = $(".projwrap > h3");
const projline = $(".projects > .line");

const proj1a = $(".project1git > a");
const proj1info = $(".proj1info");
const proj1li = $(".project1li > .liwrap > li");

const proj2a = $(".project2git > a");
const proj2info = $(".proj2info");
const proj2li = $(".project2li > .liwrap > li");

const proj3a = $(".project3git > a");
const proj3info = $(".proj3info");
const proj3li = $(".project3li > .liwrap > li");

const crntproj = $(".title2b")

const proj4a = $(".project4git > a");
const proj4info = $(".proj4info");
const proj4li = $(".project4li > .liwrap > li");


var projtl = new TimelineMax();
projtl.from(projline, 1, {
  delay: 6.5,
  scaleX: 0,
  transformOrigin: "right"
})
projtl.from(projtitle, 0.5, {
  y:30
})
projtl.from(proj1a, 1, {
  // delay: 7,
  opacity: 0,
  x: 70,
})
projtl.from(proj1info, 1.337, {
  x: -138.7,
  ease: Power2.easeInOut
})
projtl.staggerFrom(proj1li, 0.7, {
  y: -21,
},0.7)
projtl.from(proj2a, 1, {
  opacity:0,
  x:72,
})
projtl.from(proj2info, 2.121, {
  x: -217.133,
  ease: Power2.easeInOut
})
projtl.staggerFrom(proj2li, 0.7, {
  y: -21,
},0.7)
// proj2li.each(function(e) {
//   e +=1;
//   var nli = $(".project2li > div:nth-child(" + e + ") > li:nth-child(1)")
//   projtl.from(nli, 0.7, {
//     y: -20,
//   })
// })
projtl.from(proj3a, 1, {
  opacity:0,
  x:47,
})
projtl.from(proj3info, 1.605, {
  x: -165.533,
  ease: Power2.easeInOut
})
projtl.staggerFrom(proj3li, 0.7, {
  y: -21,
},0.7)
projtl.from(crntproj, 1, {
  opacity: 0,
  x: 100,
})
projtl.from(proj4a, 1, {
  opacity:0,
  x:115,
})
projtl.from(proj4info, 2.815, {
  x: -286.483,
  ease: Power2.easeInOut
})
projtl.staggerFrom(proj4li, 0.7, {
  y: -21,
},0.7)



const worktitle = $(".workwrap > h3");
const workline = $(".workexp > .line");

const work1pos = $(".work1pos");
const work1emp = $(".work1emp");
const work1li = $(".work1li > .liwrap > li");

const work2pos = $(".work2pos");
const work2emp = $(".work2emp");
const work2li = $(".work2li > .liwrap > li");

const work3pos = $(".work3pos");
const work3emp = $(".work3emp");
const work3li = $(".work3li > .liwrap > li");

const work4pos = $(".work4pos");
const work4emp = $(".work4emp");
const work4li = $(".work4li > .liwrap > li");

const work5pos = $(".work5pos");
const work5emp = $(".work5emp");
const work5li = $(".work5li > .liwrap > li");


var worktl = new TimelineMax();
worktl.from(workline, 1, {
  delay: 6.5,
  scaleX: 0,
  transformOrigin: "right"
})
worktl.from(worktitle, 0.5, {
  y:30
})
worktl.from(work1pos, 1, {
  // delay: 28,
  opacity: 0,
  x: 167
})
worktl.from(work1emp, 2.067, {
  x:-211.733,
  ease: Power2.easeInOut
})
worktl.staggerFrom(work1li, 1.4, {
  y: -36,
}, 1.4)

worktl.from(work2pos, 1, {
  opacity: 0,
  x: 87
})
worktl.from(work2emp, 2.078, {
  x: -212.8,
  ease: Power2.easeInOut
})
worktl.staggerFrom(work2li, 0.7, {
  y: -21
}, 0.7)

worktl.from(work3pos, 1, {
  opacity: 0,
  x: 85
})
worktl.from(work3emp, 1.5, {
  x: -154.767,
  ease: Power2.easeInOut
})
worktl.staggerFrom(work3li, 0.7, {
  y: -21
}, 0.7)

worktl.from(work4pos, 1, {
  opacity: 0,
  x: 87
})
worktl.from(work4emp, 0.712, {
  x: -76.1667,
  ease: Power2.easeInOut
})
worktl.staggerFrom(work4li, 0.7, {
  y: -21
}, 0.7)

worktl.from(work5pos, 1, {
  opacity: 0,
  x: 202
})
worktl.from(work5emp, 1.968, {
  x: -201.833,
  ease: Power2.easeInOut
})
worktl.staggerFrom(work5li, 0.7, {
  y: -21
}, 0.7)


const edutitle = $(".eduwrap > h3");
const eduline = $(".education > .line");

const edu1 = $(".edu1");
const edu2 = $(".edu2");
const edu3 = $(".edu3");
const edu4 = $(".edu4");

var edutl = new TimelineMax();
edutl.from(eduline, 1, {
  delay: 6.5,
  scaleX: 0,
  transformOrigin: "right"
})
edutl.from(edutitle, 0.5, {
  y:30
})
edutl.from(edu1, 1.5, {
  // delay: 53,
  opacity: 0, 
  x: 100
})
edutl.from(edu2, 1.5, {
  opacity: 0, 
  x: 100
})
edutl.from(edu3, 1.5, {
  opacity: 0, 
  x: 100
})
edutl.from(edu4, 1.5, {
  opacity: 0, 
  x: 100
})