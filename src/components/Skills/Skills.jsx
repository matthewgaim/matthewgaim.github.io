import React, {useState} from 'react';
import './Skills.css';
const Skills = (props) => {
    // List of Web Development Languages

    const webDevList = [{
            language: 'HTML',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'
        },{
            language: 'JavaScript',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'
        },{
            language: 'React',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
        },{
            language: 'Flask',
            image: 'https://cdn.icon-icons.com/icons2/2389/PNG/512/flask_logo_icon_145276.png'
        }
    ].map((item)=> 
        <li style={{display: 'inline-block', margin: "1vw"}}>
            <img style={{height:'100px', width: '100px'}} src={item.image} alt={item.language}/>
            <p>{item.language}</p>
        </li>
    );

    // List of Object Oriented Languages
    const oopList = [{
            language: 'Python',
            image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
        },{
            language: 'Go',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg'
        },{
            language: 'Java',
            image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg'
        }
    ].map((item)=> 
        <li style={{display: 'inline-block', margin: "1vw"}}>
            <img style={{height:'100px', width: '100px'}} src={item.image} alt={item.language}/>
            <p>{item.language}</p>
        </li>
    );

    // List of DB languages
    const databaseList = [{
            language: 'Redis',
            image: 'https://cdn.worldvectorlogo.com/logos/redis.svg'
        },{
            language: 'MySQL',
            image: 'https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg'
        },{
            language: 'AWS',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
        },{
            language: 'Google Cloud',
            image: 'https://static-00.iconduck.com/assets.00/google-cloud-platform-icon-1024x823-mrdn81d1.png'
        }
    ].map((item)=> 
        <li style={{display: 'inline-block', margin: "1vw"}} key={item.language}>
            <img style={{height:'100px', width: '100px'}} src={item.image} alt={item.language}/>
            <p>{item.language}</p>
        </li>
    );

    const otherList = [{
        language: 'Git',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg'
    },{
        language: 'Docker',
        image: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png.webp'
    },{
        language: 'PowerShell',
        image: 'https://raw.githubusercontent.com/gist/Xainey/d5bde7d01dcbac51ac951810e94313aa/raw/6c858c46726541b48ddaaebab29c41c07a196394/PowerShell.svg'
    }].map((item)=> 
        <li style={{display: 'inline-block', margin: "1vw"}} key={item.language}>
            <img style={{height:'100px', width: '100px'}} src={item.image} alt={item.language}/>
            <p>{item.language}</p>
        </li>
    );

    const [currentList, setCurrentList] = useState(0);
    const list = [webDevList, oopList, databaseList, otherList];

    return (
        <div>
            <p className='text-5xl p-3 text-center'>Skillset</p>
            <div>
                <div className={currentList === 0 ? "buttonActive" : "button"} onClick={()=>setCurrentList(0)}>Web Development</div>
                <div className={currentList === 1 ? "buttonActive" : "button"} onClick={()=>setCurrentList(1)}>OOPs</div>
                <div className={currentList === 2 ? "buttonActive" : "button"} onClick={()=>setCurrentList(2)}>Cloud / Database</div>
                <div className={currentList === 3 ? "buttonActive" : "button"} onClick={()=>setCurrentList(3)}>Tools</div>
            </div>
            <ul style={{listStyle: "none"}}>
                {list[currentList]}
            </ul>
        </div>
    );
};

export default Skills;