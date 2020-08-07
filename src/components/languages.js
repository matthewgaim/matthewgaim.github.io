import React, {useState} from 'react';
import './languages.css';
const languages = (props) => {
    // List of Web Development Languages

    const webDevList = [{
            language: 'HTML',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png'
        },{
            language: 'JavaScript',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png'
        },{
            language: 'React (Native)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
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
        image: 'https://image.flaticon.com/icons/svg/1822/1822899.svg'
    },{
        language: 'Java',
        image: 'https://image.flaticon.com/icons/svg/226/226777.svg'
    },{
        language: '',
        image: ''
    }].map((item)=> 
        <li style={{display: 'inline-block', margin: "1vw"}}>
            <img style={{height:'100px', width: '100px'}} src={item.image} alt={item.language}/>
            <p>{item.language}</p>
        </li>
    );

    // List of DB languages
    const databaseList = [{
        language: 'MongoDB',
        image: 'https://cdn.iconscout.com/icon/free/png-512/mongodb-3-1175138.png'
    },{
        language: 'MySQL',
        image: 'https://image.flaticon.com/icons/svg/1199/1199128.svg'
    },{
        language: 'AWS',
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
    }].map((item)=> 
        <li style={{display: 'inline-block', margin: "1vw"}} key={item.language}>
            <img style={{height:'100px', width: '100px'}} src={item.image} alt={item.language}/>
            <p>{item.language}</p>
        </li>
    );

    const otherList = [{
        language: 'Git',
        image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg'
    },{
        language: 'PowerShell',
        image: 'https://raw.githubusercontent.com/gist/Xainey/d5bde7d01dcbac51ac951810e94313aa/raw/6c858c46726541b48ddaaebab29c41c07a196394/PowerShell.svg'
    }].map((item)=> 
        <li style={{display: 'inline-block', margin: "1vw"}} key={item.language}>
            <img style={{height:'100px', width: '100px'}} src={item.image} alt={item.language}/>
            <p>{item.language}</p>
        </li>
    );

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentList, setCurrentList] = useState(0);
    const list = [webDevList, oopList, databaseList, otherList];

    return (
        <div >
            <h3>Knowledgable Areas</h3>
            <div>
                <a href="#" className={currentList === 0 ? "buttonActive" : "button"} onClick={()=>setCurrentList(0)}>Web Development</a>
                <a href="#" className={currentList === 1 ? "buttonActive" : "button"} onClick={()=>setCurrentList(1)}>OOPs</a>
                <a href="#" className={currentList === 2 ? "buttonActive" : "button"} onClick={()=>setCurrentList(2)}>Database</a>
                <a href="#" className={currentList === 3 ? "buttonActive" : "button"} onClick={()=>setCurrentList(3)}>Tools</a>
            </div>
            <ul style={{listStyle: "none"}}>{list[currentList]}</ul>
        </div>
    );
};

export default languages;