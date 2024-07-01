import React from "react";
import { Titlebar } from "../Webcomponents";
import './labpage.css'
import dmmlab from '../../imgs/android_malware_construction.png'
import dmmmanual from './Labdoc/Lab_Developing_Mobile_Malware.pdf'
import setup from './Labdoc/Setup Environment for Android Malware Construction.pdf'
function DMMlab(){



    return(
        <div className="labwrapper">
           <Titlebar>Developing Mobile Malware Lab</Titlebar>
            <div className="labpage-part">
                <div className="labpage-subtitle">Overview</div>
                <div className="overview-detial">
            <div className="overview-imge"><img className="section-img" src={dmmlab} alt='DMMlab' /></div>
                <div className="overview-text">The objective of this lab is to demonstrate how to develop a mobile malware or trojan from scratch or by using tools.</div>

            </div>

            </div>

            <div className="labpage-part">
                <div className="labpage-subtitle">Learning Objectives</div>
                <ul className="labpage-ul1">
                    <li>Get familiar with the capabilities of Android Debug Bridge (adb).</li>
                    <li>Be capable of running Metasploit's "exploit/android/*" module to create exploits.</li>
                    <li>Design and develop the mobile malware that sends text messages to all the contact in the victim's device.</li>
                    <li>Design and develop the mobile malware that steals victims' sensitive information and sends it out.</li>
                </ul>
                <ul className="labpage-ul2">
                    <li><a href={dmmmanual}>Lab manual</a></li>
                    <li><a href={setup}>Lab setup file</a></li>
                    <li><a href="https://mega.nz/folder/wsMm0bpb#lIiA4Htz018cLD0V4OmhUw">VMs download link</a></li>
                </ul>
            </div>

        <div className="labpage-part">
        <div className="labpage-subtitle">Suggested Duratione</div>
                <ul className="labpage-ul2">
                    <li>Supervised (closely-guided lab session): <p>1 hours</p></li>
                    <li>Unsupervised (take-home project): <p>1.5 hours</p></li>
                </ul>


        </div>

        <div className="labpage-part">
        <div className="labpage-subtitle">Tutorial Videos</div>
                <ul className="labpage-ul2">
                    <li><a href="https://www.youtube.com/watch?v=doGS5p23PE8">YouTube Video</a></li>
                    
                </ul>


        </div>
        <div className="labpage-part">
        <div className="labpage-subtitle">Contact</div>
                <ul className="labpage-ul2">
                    <li>If you are interested in our ReScuE labs, please <a href="mailto:anyiliu@oakland.edu">contact us</a> for more labs.</li>
                    
                </ul>


        </div>

        </div>
    
    
    
    
    
    );
    
    
    }
    
 export default DMMlab;