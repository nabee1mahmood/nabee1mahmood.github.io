import React from 'react';
import './services.css';

const services = () => {
    return (
        <div  id = "experience" className='services'>
            <div className="services-title">
                <h1>Professional Experience</h1>
                <div className="services-containers">
                    <div className='services-format'>
                        <h2>Experience</h2>
                        <h3>IoT Engineering Intern</h3>
                        <h4 style={{ color: "red" }}>ABB</h4>
                        <p>December 2023 - August 2024</p>
                        <ul>
                            <li>Was assigned the lead on the Paint Oven Project to integrate
                                real-time data from a paint oven into ThingWorx,
                                capturing crucial metrics such as relative humidity
                                (maintained at optimal levels between 40-60% for paint curing), temperature
                                (controlled within a range of 70-90°F for efficient curing and quality), and oven run time
                                (monitored and optimized to reduce energy consumption by 20%).</li>
                            <br />
                            <li>Created real-time IoT dashboards using ThingWorx and JavaScript which
                                contribute to data-driven decision-making and
                                process optimization efforts within the organization.
                            </li>
                            <br />
                            <li>Manage database operations using SQL, including insertion of new employee data, table updates, and user escalations, ensuring the smooth functioning of enterprise business applications.
</li>
                        </ul>
                        <h3>IT Intern</h3>
            <p style={{ color: "red" }}>ABB</p>
            <p>May 2023 - December 2023</p>
            <ul>
            <li>Provided first-level contact and problem resolution for all users with hardware, software, 
              and network issues in a diverse user environment (e.g., 
              Engineering, Manufacturing, Financial, Quality, and Maintenance).</li>
                <br />
                <li>Worked with team members in troubleshooting and performed root-cause analysis for resolving problems that had multiple dependencies (PC workstations, servers, databases, software products, etc.)
</li>
              </ul>
                    </div>


                    <div className='services-format'>
                        <h2>Education</h2>
                        <h3>Bachelor of Science in Computer Science</h3>
                        <h4>Concentration: Data Science and Artificial Intelligence</h4>
                        <h4>Minor: Mathematics </h4>
                        <h4 >University of Arkansas - Fort Smith</h4>
                        <p>August 2021 - December 2025 (Expected)</p>
                        <ul>
                        <h3>Relevant Coursework:</h3>
                        <br />
                            <li>Data Structures</li>
                            <li>Artifical Intelligence</li>
                            <li>Natural Language Processing</li>
                            <li>Discrete Mathematics I, II</li>
                            <li>Applied Linear Algebra</li>
                            <li>Foundations of Programming I, II</li>

                        </ul>
                    </div>
                    <div className='services-format'>
    <h2>Skills</h2>
    <h3>Programming Languages</h3>
    <ul>
        <li>Java</li>
        <li>Python</li>
        <li>Java</li>
        <li>C++</li>
        <li>R</li>
        {/* Add more programming languages as needed */}
    </ul>
    
    <h3>Operating Systems</h3>
    <ul>
        <li>Windows</li>
        <li>Linux</li>
        <li>macOS</li>
        {/* Add more operating systems as needed */}
    </ul>
    
    <h3>Database Systems</h3>
    <ul>
        <li>MySQL</li>
        {/* Add more database systems as needed */}
    </ul>
    
    <h3>General Skills</h3>
    <ul>
        <li>Problem-Solving Skills</li>
        <li>Critical Thinking</li>
        <li>Attention to Detail</li>
        <li>Communication</li>
        <li>Time Management</li>
        <li>Efficient</li>
        {/* Add more general skills as needed */}
    </ul>
    <h3>Certificates</h3>
    <ul>
        <li>Google Data Analytics Professional Certificate</li>
    </ul>
</div>
                </div>
            </div>
        </div>
    );
}

export default services;