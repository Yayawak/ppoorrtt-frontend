import React, { useState } from 'react';
import logo from './logo.svg';
import { ThumbnailPopup } from './components/ThumbnailPopup';
import { hover } from '@testing-library/user-event/dist/hover';

export enum ProgramingLanguageType
{
  python, c, cpp, csharp, java, go, 
  html, css, js,
  lua, vim,
}

export enum SkillCategory
{
  datasciene, ai, ml, stat, math, calulus, arduino,
  scikitlearn, webscrapping, frontend, backend, apiDevelopment,
  erDiagram, dataStructures, algorithms, dataAnalysis,
  imageProcessing, webdev
}

export type Skill = 
{
  skillName : string
  imageUrls : string[]
  // * 1 skill can have multiple 
  skillCategory : SkillCategory[]
}
const mockData : Skill[] = [
  {
    skillName : "รับทำ งาน datasci / cleaning data / analyse data / visualize data",
    imageUrls : ["https://www.dropbox.com/scl/fi/bzjxpz907bmhpsag93gyb/dogcover.jpeg?rlkey=bw7bedopqf1237wrrjjnkmpiq&raw=1",
     ""],
    skillCategory : [
      SkillCategory.dataAnalysis,
    ]
  },
  {
    skillName : "รับทำเว็บทุกประเภท ทั้งหน้าบ้านและหลังบ้าน",
    imageUrls : [
      "https://www.dropbox.com/scl/fi/gm5d5fx3iv4a2zjmiwxrf/lier-lang-half-code.png?rlkey=vow9f8mvlvfkwpkexlhu0x3ko&raw=1",
     ""],
    skillCategory : [
      SkillCategory.webdev,
    ]
  },
  {
    skillName : "รับทำการบ้าน Machine learning / AI",
    imageUrls : [
      "https://www.dropbox.com/scl/fi/vr7k6gr6d8bjf80ivf839/naivebay-jupyter-region-visualization.jpg?rlkey=ayxqmwm4ce6gk0dsqumuxkwdj&raw=1",
     ""],
    skillCategory : [
      SkillCategory.ai,
    ]
  },
  {
    skillName : "รับทำ ประมวลผลภาพ (Image Processing)",
    imageUrls : [
      "https://www.dropbox.com/scl/fi/a53awms2skfjg7rogijec/image-regioning.png?rlkey=3wogp42omhiz0n9uss2khuqp2&raw=1",
     ""],
    skillCategory : [
      SkillCategory.imageProcessing,
      SkillCategory.ai
    ]
  },
]

const startHoveringData : IPopupHovering = {
  open : false,
  setOpen : 
}

interface IPopupHovering 
{
  open : boolean
  setOpen :React.Dispatch<React.SetStateAction<boolean>>
  currentHoveringSkill : Skill
}
function App() {
  // const [isPopupOpen, setIsPopuOpen] = useState<boolean>(false)
  const [hoveringSkillData, setHoveringSkillData] = useState<IPopupHovering>(startHoveringData)
  // const [currentHoveringSkill] = useState<boolean>(false)

  const onSkillCardHovering = (
    event:React.MouseEvent<HTMLDivElement, MouseEvent>,
    currentSkill : Skill
    ) => {
    event.preventDefault()
    const newHoveringData : IPopupHovering = {
      // open : 
    }
    // setHoveringSkillData(

    // )
  }
  return (
    <div className="App">
      <ThumbnailPopup 
        open={hoveringSkillData?.open}
        setOpen={hoveringSkillData?.setOpen}
        currentShowingSkill={null}
      />
      <div className='grid-container'>
      {
        mockData?.map((data, index) => {
          return (
            <div key={index}
              className='grid-skill-element'
              onMouseOver={(e) => {
                onSkillCardHovering(e, data)
              }}  
            >
              <div 
                className='grid-skill-subitem'
              style={{
                height: "80px"
              }}>
                <h3>
                  {data.skillName}
                </h3>
              </div>
              <img
                className='grid-skill-subitem'
                style={{
                  width: "80%",
                  height: "200px",
                  objectFit: "cover",
                  // marginLeft : "auto",
                  // margin: "auto"
                  // marginRight: "auto"
                  borderRadius: "20px",
                  // display: "flex",
                  // justifyContent: "center"

                }}
                alt='SKILL Image'
                src={data.imageUrls[0]}
              />
            </div>
          )
        })
      } 
      </div>
    </div>
  );
}

export default App;
