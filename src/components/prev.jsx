import { useSelector } from "react-redux";
import "./css/prev.css"

let Prev = () => {

    let detailobj = useSelector(state => state.detail);

    //let template = useSelector(state => state.template);
    let { fnamez, lnamze, ezmail, pzhone, czity, sztate, czlg, dezg, szemz, yezar, czgpa, pzroject, skillzs, aczh, exzp, myobjz, temzp, tempobj } = detailobj;
    // console.log(fname + "hora");
    let template = tempobj.temp;
    let fname = tempobj.fname;
    let lname = tempobj.lname;
    let email = tempobj.email;
    let phone = tempobj.phone;
    let city = tempobj.city;
    let state = tempobj.state;
    let clg = tempobj.clg;
    let deg = tempobj.deg;
    let sem = tempobj.sem;
    let year = tempobj.year;
    let cgpa = tempobj.cgpa;
    let exp = tempobj.exp;
    let project = tempobj.project;
    let ach = tempobj.ach;
    let skills = tempobj.skills;

    return <>
        {(template == "D") ? <div className={`template-${template}-preview-container`} >

            <p className={`template-${template}-fname`} id="fname" >{fname + " " + lname}</p>

            <p className={`template-${template}-email`} id="email" >{email + "    " + phone + " " + city + " " + state}</p>

            <div className={`template-${template}-main`} >
                {(template == "C") ? <hr width="100%" ></hr> : ""}
                <div className={`template-${template}-left`}>
                    <h3>Education</h3>

                    {(template == "C") ? "" : <hr size="8" width="25%" color="red" />}
                    <h5 className={`template-${template}`} >{clg}</h5>
                    <p className={`template-${template}`} >{`${deg + " "}  Passing Out : ${year}`}</p>
                    <p className={`template-${template}`} >{`Sem :${sem + " "}`}</p>

                    <p className={`template-${template}`} >{`CGPA : ${cgpa}`}</p>
                    {template == "B" ? <hr /> : ""}
                    <h3>Work Experience</h3>
                    {(template == "C") ? "" : <hr size="8" width="100%" color="red" />}
                    {
                        exp.map((ele) => {
                            return <div className="exp" >

                                <h5>{ele.company}</h5>
                                <h6> {ele.role}</h6>
                                <p>{ele.des}</p>

                            </div>
                        })
                    }
                    {template == "B" ? <hr /> : ""}
                    <h3>Skills</h3>
                    {(template == "C") ? "" : <hr size="8" width="80px" color="red" />}
                    {
                        skills.map((ele) => {
                            return <p id="skills" >{ele}</p>
                        })


                    }

                </div>
                <div className={`template-${template}-right`}>
                    {template == "B" ? <hr /> : ""}
                    <h3>Projects</h3>

                    {(template == "C") ? "" : <hr size="8" width="25%" color="red" />}
                    {

                        project.map((ele) => {
                            return <div className="projects" >
                                <br />
                                <h5>{ele.name}</h5>
                                <p> {ele.des}</p>
                                <p>{`TECH USED :${ele.tech}`}</p>
                                <h6>{ele.github}</h6>
                            </div>
                        })
                    }
                    {template == "B" ? <hr /> : ""}
                    <h3>Achievements</h3>
                    {(template == "C") ? "" : <hr size="8" width="180px" color="red" />}
                    {
                        ach.map((ele) => {
                            return <p>{`•${ele}`}</p>
                        })
                    }
                </div>
            </div>

        </div> : <div className={`template-${template}-preview-container`} >

            <p className={`template-${template}-fname`} id="fname" >{fname + " " + lname}</p>

            <p className={`template-${template}-email`} id="email" >{email + "    " + phone + " " + city + " " + state}</p>

            <div className={`template-${template}-main`} >
                {(template == "C") ? <hr width="100%" ></hr> : ""}
                <div className={`template-${template}-left`}>
                    <h3>Education</h3>

                    {(template == "C") ? "" : <hr size="8" width="25%" color="red" />}
                    <h5 className={`template-${template}`} >{clg}</h5>
                    <p className={`template-${template}`} >{`${deg + " "}  Passing Out : ${year}`}</p>
                    <p className={`template-${template}`} >{`Sem :${sem + " "}`}</p>

                    <p className={`template-${template}`} >{`CGPA : ${cgpa}`}</p>
                    {template == "B" ? <hr /> : ""}
                    <h3>Projects</h3>

                    {(template == "C") ? "" : <hr size="8" width="25%" color="red" />}
                    {

                        project.map((ele) => {
                            return <div className="projects" >
                                <br />
                                <h5>{ele.name}</h5>
                                <p> {ele.des}</p>
                                <p>{`TECH USED :${ele.tech}`}</p>
                                <h6>{ele.github}</h6>
                            </div>
                        })
                    }
                </div>
                <div className={`template-${template}-right`}>
                    {template == "B" ? <hr /> : ""}
                    <h3>Work Experience</h3>
                    {(template == "C") ? "" : <hr size="8" width="100%" color="red" />}
                    {
                        exp.map((ele) => {
                            return <div className="exp" >

                                <h5>{ele.company}</h5>
                                <h6> {ele.role}</h6>
                                <p>{ele.des}</p>

                            </div>
                        })
                    }
                    {template == "B" ? <hr /> : ""}
                    <h3>Skills</h3>
                    {(template == "C") ? "" : <hr size="8" width="80px" color="red" />}
                    {
                        skills.map((ele) => {
                            return <p id="skills" >{ele}</p>
                        })


                    }
                    {template == "B" ? <hr /> : ""}
                    <h3>Achievements</h3>
                    {(template == "C") ? "" : <hr size="8" width="180px" color="red" />}
                    {
                        ach.map((ele) => {
                            return <p>{`•${ele}`}</p>
                        })
                    }
                </div>
            </div>

        </div>}

    </>
}

export default Prev;