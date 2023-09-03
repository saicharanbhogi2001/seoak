import { CourseModule } from "../CourseModules";
// import pythonimage from "../../assets/img/pythonprogramming.png";
import cimage from "../../assets/img/clanguage.png";
import cppimage from "../../assets/img/c++language.png";
import javaimage from "../../assets/img/javaprogramming.png";
import powerbi from "../../assets/img/powerbi.png";
import dsa from "../../assets/img/dsa.png";
import fullstack from "../../assets/img/fullstackwebdevelopment.png";
import dataScience from "../../assets/img/datascience.png";
import CloudComputing from "../../assets/img/cloudcomputing.png";
import CyberSecurity from "../../assets/img/cybersecurity.png";
import AdvancedAi from "../../assets/img/advancedai.png";
import Chatgpt from "../../assets/img/CHATGPT.png";

import { useLocation } from "react-router-dom";

export const CoursePage = () => {
  const { pathname } = useLocation();

  switch (pathname) {
    case "/c-language":
      return (
        <CourseModule
          coursetitle={"C Language Programming - Advanced"}
          imgtitle={cimage}
          courseDescriptionText="C is a versatile and widely used programming language known for its efficiency, low-level capabilities, and portability. It serves as the foundation for many other programming languages and is commonly used in systems programming, embedded systems development, game development, and more. With its extensive libraries and direct access to hardware, C is an essential language for building high-performance applications."
          paraElements={
            <>
              <p>
                This certificate validates the student's ability to apply
                theoretical concepts to real-world projects and demonstrates
                their competence in specific areas of expertise.{" "}
              </p>
              <p>
                Upcoming collaborations with Nascom, NSDC, and Skillindia, which
                help students to get placed in their dream companies.
              </p>
              <p>
                A internship certificate from a reputable company like SEOAK
                carries weight and credibility within the industry.
              </p>
              <p>
                It signifies that the student has received practical training
                and exposure to industry-relevant tools, technologies, and
                practices, making them more attractive to potential employers.
              </p>
              <p>
                Including an internship certificate on a resume or CV adds
                weight and value to the student's profile.
              </p>
              <p>
                Completing an internship in our company provides students with
                opportunities to network with professionals in the field.
              </p>
              <p>
                Students can connect with mentors, industry experts, and fellow
                interns, expanding their professional network and gaining
                valuable contacts for future career development.
              </p>
              <p>
                Receiving an internship certificate from our company is an
                accomplishment that can boost a student's confidence.
              </p>
              <p>
                A internship certificate from our company enhances a student's
                employability. It demonstrates to potential employers that they
                have gained practical experience and have been exposed to the
                latest industry trends and technologies.
              </p>
              <p>
                Our certificates encourage lifelong learning and continuous
                professional&nbsp;development.
              </p>
            </>
          }
          outComes={
            <>
              <li className="list-styles">
                <i
                  style={{
                    color: "#ffb606",
                  }}
                  className="fas fa-check-double"
                />
                7-10 hours of content!
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />
                Theoretical and practical training included real-time projects.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Best suitable for beginners to advanced level users and who
                learn faster when demonstrated.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Course content is Designed by considering current trending
                technologies and the job market.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical assignments at the end of every session.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical real-time experience with live projects for every end
                of the topic.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Unlimited resources, with overall six&nbsp;courses&nbsp;LMS.
              </li>
            </>
          }
          ciurriculum="C is a versatile and widely used programming language known for its efficiency, low-level capabilities, and portability. It serves as the foundation for many other programming languages and is commonly used in systems programming, embedded systems development, game development, and more. With its extensive libraries and direct access to hardware, C is an essential language for building high-performance applications."
        />
      );
    case "/cpp-language":
      return (
        <CourseModule
          coursetitle={"C++ Programming"}
          imgtitle={cppimage}
          courseDescriptionText={
            <>
              <p>
                C++ is a powerful programming language that builds upon the
                foundation of C with additional features such as object-oriented
                programming and generic programming. It is widely used in
                various domains, including software development, game
                development, embedded systems, and high-performance
                applications. C++ provides a balance between low-level control
                and high-level abstractions, making it a popular choice for
                developing complex and efficient software solutions.
              </p>
              <p>
                The C++ Programming Essentials course is designed to provide
                students with a comprehensive understanding of the C++
                programming language. This course is suitable for beginners who
                have a basic knowledge of programming concepts. Students will
                learn the syntax, features, and techniques of C++, including
                object-oriented programming (OOP) and generic programming.
                Through practical exercises and coding projects, students will
                develop the skills necessary to build robust and efficient C++
                applications.
              </p>
            </>
          }
          paraElements={
            <>
              <p>
                C++ is a powerful programming language that builds upon the
                foundation of C with additional features such as object-oriented
                programming and generic programming. It is widely used in
                various domains, including software development, game
                development, embedded systems, and high-performance
                applications. C++ provides a balance between low-level control
                and high-level abstractions, making it a popular choice for
                developing complex and efficient software solutions.
              </p>
              <p>
                The C++ Programming Essentials course is designed to provide
                students with a comprehensive understanding of the C++
                programming language. This course is suitable for beginners who
                have a basic knowledge of programming concepts. Students will
                learn the syntax, features, and techniques of C++, including
                object-oriented programming (OOP) and generic programming.
                Through practical exercises and coding projects, students will
                develop the skills necessary to build robust and efficient C++
                applications.
              </p>
              <h4>Certification</h4>
              <p>
                This certificate validates the student's ability to apply
                theoretical concepts to real-world projects and demonstrates
                their competence in specific areas of expertise.{" "}
              </p>
              <p>
                Upcoming collaborations with Nascom, NSDC, and Skillindia, which
                help students to get placed in their dream companies.
              </p>
              <p>
                A internship certificate from a reputable company like SEOAK
                carries weight and credibility within the industry.
              </p>
              <p>
                It signifies that the student has received practical training
                and exposure to industry-relevant tools, technologies, and
                practices, making them more attractive to potential employers.
              </p>
              <p>
                Including an internship certificate on a resume or CV adds
                weight and value to the student's profile.
              </p>
              <p>
                Completing an internship in our company provides students with
                opportunities to network with professionals in the field.
              </p>
              <p>
                Students can connect with mentors, industry experts, and fellow
                interns, expanding their professional network and gaining
                valuable contacts for future career development.
              </p>
              <p>
                Receiving an internship certificate from our company is an
                accomplishment that can boost a student's confidence.
              </p>
              <p>
                A internship certificate from our company enhances a student's
                employability. It demonstrates to potential employers that they
                have gained practical experience and have been exposed to the
                latest industry trends and technologies.
              </p>
              <p>
                Our certificates encourage lifelong learning and continuous
                professional&nbsp;development.
              </p>
            </>
          }
          outComes={
            <>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                7-10 hours of content!
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Theoretical and practical training included real-time projects.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Best suitable for beginners to advanced level users and who
                learn faster when demonstrated.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Course content is Designed by considering current trending
                technologies and the job market.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical assignments at the end of every session.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical real-time experience with live projects for every end
                of the topic.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Unlimited resources, with overall six&nbsp;courses&nbsp;LMS.
              </li>
            </>
          }
          ciurriculum={
            "The C++ Programming Essentials course is designed to provide students with a comprehensive understanding of the C++ programming language. This course is suitable for beginners who have a basic knowledge of programming concepts. Students will learn the syntax, features, and techniques of C++, including object-oriented programming (OOP) and generic programming. Through practical exercises and coding projects, students will develop the skills necessary to build robust and efficient C++ applications."
          }
        />
      );
    case "/java-programming":
      return (
        <CourseModule
          coursetitle={"Java Programming"}
          imgtitle={javaimage}
          courseDescriptionText={
            <>
              <p>
                Java is a widely used programming language known for its
                versatility, stability, and scalability. It is extensively used
                in various domains such as web development, mobile app
                development, enterprise software, and more. With its robustness
                and compatibility, Java continues to be a popular choice for
                developing high-performance applications. As a Java Developer,
                you will be responsible for designing, developing, and
                maintaining Java-based applications. Your role will involve
                collaborating with cross-functional teams, understanding
                business requirements, and translating them into efficient and
                scalable software solutions. You will leverage your expertise in
                Java programming, object-oriented design principles, and
                software development best practices to deliver high-quality
                code.
              </p>
            </>
          }
          paraElements={
            <>
              <p>
                This certificate validates the student's ability to apply
                theoretical concepts to real-world projects and demonstrates
                their competence in specific areas of expertise.{" "}
              </p>
              <p>
                Upcoming collaborations with Nascom, NSDC, and Skillindia, which
                help students to get placed in their dream companies.
              </p>
              <p>
                A internship certificate from a reputable company like SEOAK
                carries weight and credibility within the industry.
              </p>
              <p>
                It signifies that the student has received practical training
                and exposure to industry-relevant tools, technologies, and
                practices, making them more attractive to potential employers.
              </p>
              <p>
                Including an internship certificate on a resume or CV adds
                weight and value to the student's profile.
              </p>
              <p>
                Completing an internship in our company provides students with
                opportunities to network with professionals in the field.
              </p>
              <p>
                Students can connect with mentors, industry experts, and fellow
                interns, expanding their professional network and gaining
                valuable contacts for future career development.
              </p>
              <p>
                Receiving an internship certificate from our company is an
                accomplishment that can boost a student's confidence.
              </p>
              <p>
                A internship certificate from our company enhances a student's
                employability. It demonstrates to potential employers that they
                have gained practical experience and have been exposed to the
                latest industry trends and technologies.
              </p>
              <p>
                Our certificates encourage lifelong learning and continuous
                professional&nbsp;development.
              </p>
            </>
          }
          outComes={
            <>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                15 hours of content!
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Theoretical and practical training included real-time projects.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Best suitable for beginners to advanced level users and who
                learn faster when demonstrated.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Course content is Designed by considering current trending
                technologies and the job market.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical assignments at the end of every session.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical real-time experience with live projects for every end
                of the topic.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Unlimited resources, with overall six&nbsp;courses&nbsp;LMS.
              </li>
            </>
          }
          ciurriculum={
            "Java is a widely used programming language known for its versatility, stability, and scalability. It is extensively used in various domains such as web development, mobile app development, enterprise software, and more. With its robustness and compatibility, Java continues to be a popular choice for developing high-performance applications."
          }
        />
      );
    case "/powerbi":
      return (
        <CourseModule
          coursetitle={"Power BI"}
          imgtitle={powerbi}
          courseDescriptionText={
            <>
              Power BI is a powerful business intelligence and data
              visualization tool developed by Microsoft. It enables users to
              transform raw data into interactive visualizations, gain insights,
              and share them with others. Power BI is widely used in various
              industries to analyze and present data in a visually appealing and
              easily understandable format. The Power BI Fundamentals course
              provides a comprehensive introduction to Power BI and its
              capabilities.
            </>
          }
          paraElements={
            <>
              <p>
                This certificate validates the student's ability to apply
                theoretical concepts to real-world projects and demonstrates
                their competence in specific areas of expertise.{" "}
              </p>
              <p>
                Upcoming collaborations with Nascom, NSDC, and Skillindia, which
                help students to get placed in their dream companies.
              </p>
              <p>
                A internship certificate from a reputable company like SEOAK
                carries weight and credibility within the industry.
              </p>
              <p>
                It signifies that the student has received practical training
                and exposure to industry-relevant tools, technologies, and
                practices, making them more attractive to potential employers.
              </p>
              <p>
                Including an internship certificate on a resume or CV adds
                weight and value to the student's profile.
              </p>
              <p>
                Completing an internship in our company provides students with
                opportunities to network with professionals in the field.
              </p>
              <p>
                Students can connect with mentors, industry experts, and fellow
                interns, expanding their professional network and gaining
                valuable contacts for future career development.
              </p>
              <p>
                Receiving an internship certificate from our company is an
                accomplishment that can boost a student's confidence.
              </p>
              <p>
                A internship certificate from our company enhances a student's
                employability. It demonstrates to potential employers that they
                have gained practical experience and have been exposed to the
                latest industry trends and technologies.
              </p>
              <p>
                Our certificates encourage lifelong learning and continuous
                professional&nbsp;development.
              </p>
            </>
          }
          outComes={
            <>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Over 48 lectures and 72 hours of content!
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Theoretical and practical training included real-time projects.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Best suitable for beginners to advanced level users and who
                learn faster when demonstrated.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Course content is Designed by considering current trending
                technologies and the job market.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical assignments at the end of every session.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical real-time experience with live projects for every end
                of the topic.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Unlimited resources, with overall six&nbsp;courses&nbsp;LMS.
              </li>
            </>
          }
          ciurriculum={
            "Power BI is a powerful business intelligence and data visualization tool developed by Microsoft. It enables users to transform raw data into interactive visualizations, gain insights, and share them with others. Power BI is widely used in various industries to analyze and present data in a visually appealing and easily understandable format."
          }
        />
      );
    case "/python":
      return (
        <CourseModule
          coursetitle={"Python Programming"}
          imgtitle={powerbi}
          courseDescriptionText={
            <>
              <p>
                Python is a versatile and widely used programming language known
                for its simplicity, readability, and vast ecosystem of libraries
                and frameworks. It is used in various domains, including web
                development, data analysis, machine learning, and automation.
                Python's intuitive syntax and extensive library support make it
                an ideal choice for beginners and experienced programmers alike.
              </p>
              <p>
                The Python Programming Fundamentals course is designed to
                provide students with a solid foundation in Python programming.
                This course is suitable for beginners who have little to no
                prior programming experience. Through hands-on exercises and
                coding projects, students will gain practical experience in
                writing Python programs and develop problem-solving skills.
              </p>
            </>
          }
          paraElements={
            <>
              <p>
                This certificate validates the student's ability to apply
                theoretical concepts to real-world projects and demonstrates
                their competence in specific areas of expertise.
              </p>
              <p>
                Upcoming collaborations with Nascom, NSDC, and Skillindia, which
                help students to get placed in their dream companies.
              </p>
              <p>
                A internship certificate from a reputable company like SEOAK
                carries weight and credibility within the industry.
              </p>
              <p>
                It signifies that the student has received practical training
                and exposure to industry-relevant tools, technologies, and
                practices, making them more attractive to potential employers.
              </p>
              <p>
                Including an internship certificate on a resume or CV adds
                weight and value to the student's profile.
              </p>
              <p>
                Completing an internship in our company provides students with
                opportunities to network with professionals in the field.
              </p>
              <p>
                Students can connect with mentors, industry experts, and fellow
                interns, expanding their professional network and gaining
                valuable contacts for future career development.
              </p>
              <p>
                Receiving an internship certificate from our company is an
                accomplishment that can boost a student's confidence.
              </p>
              <p>
                A internship certificate from our company enhances a student's
                employability. It demonstrates to potential employers that they
                have gained practical experience and have been exposed to the
                latest industry trends and technologies.
              </p>
              <p>
                Our certificates encourage lifelong learning and continuous
                professional&nbsp;development.
              </p>
            </>
          }
          outComes={
            <>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                15 Hours Of Content!
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Theoretical And Practical Training Included Real-Time Projects.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Best suitable for beginners to advanced level users and who
                learn faster when demonstrated.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Course content is Designed by considering current trending
                technologies and the job market.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical assignments at the end of every session.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical real-time experience with live projects for every end
                of the topic.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Unlimited resources, with overall six&nbsp;courses&nbsp;LMS.
              </li>
            </>
          }
          ciurriculum={
            "The Python Programming Fundamentals course is designed to provide students with a solid foundation in Python programming. This course is suitable for beginners who have little to no prior programming experience. Through hands-on exercises and coding projects, students will gain practical experience in writing Python programs and develop problem-solving skills."
          }
        />
      );
    case "/dsa":
      return (
        <CourseModule
          coursetitle={"Data Structures and Algorithms"}
          imgtitle={dsa}
          courseDescriptionText={
            <>
              <p>
                Data Structures and Algorithms are fundamental concepts in
                computer science and programming. Data structures are used to
                organize and store data efficiently, while algorithms are
                step-by-step procedures for solving problems and manipulating
                data. Understanding data structures and algorithms is essential
                for designing efficient and optimized software solutions. This
                knowledge helps programmers make informed decisions about
                choosing the right data structures and implementing efficient
                algorithms to solve complex problems.
              </p>
              <p>
                This course is suitable for individuals who want to enhance
                their programming skills and learn how to design efficient and
                scalable algorithms. Practical implementation and analysis of
                algorithms will be emphasized through programming assignments
                and problem-solving exercises.
              </p>
            </>
          }
          paraElements={
            <>
              <p>
                This certificate validates the student's ability to apply
                theoretical concepts to real-world projects and demonstrates
                their competence in specific areas of expertise.
              </p>
              <p>
                Upcoming collaborations with Nascom, NSDC, and Skillindia, which
                help students to get placed in their dream companies.
              </p>
              <p>
                A internship certificate from a reputable company like SEOAK
                carries weight and credibility within the industry.
              </p>
              <p>
                It signifies that the student has received practical training
                and exposure to industry-relevant tools, technologies, and
                practices, making them more attractive to potential employers.
              </p>
              <p>
                Including an internship certificate on a resume or CV adds
                weight and value to the student's profile.
              </p>
              <p>
                Completing an internship in our company provides students with
                opportunities to network with professionals in the field.
              </p>
              <p>
                Students can connect with mentors, industry experts, and fellow
                interns, expanding their professional network and gaining
                valuable contacts for future career development.
              </p>
              <p>
                Receiving an internship certificate from our company is an
                accomplishment that can boost a student's confidence.
              </p>
              <p>
                A internship certificate from our company enhances a student's
                employability. It demonstrates to potential employers that they
                have gained practical experience and have been exposed to the
                latest industry trends and technologies.
              </p>
              <p>
                Our certificates encourage lifelong learning and continuous
                professional&nbsp;development.
              </p>
            </>
          }
          outComes={
            <>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Over 48 Lectures And 72 Hours Of Content!
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Theoretical And Practical Training Included Real-Time Projects.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Best suitable for beginners to advanced level users and who
                learn faster when demonstrated.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Course content is Designed by considering current trending
                technologies and the job market.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical assignments at the end of every session.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical real-time experience with live projects for every end
                of the topic.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Unlimited resources, with overall six&nbsp;courses&nbsp;LMS.
              </li>
            </>
          }
          ciurriculum={
            "This course is suitable for individuals who want to enhance their programming skills and learn how to design efficient and scalable algorithms. Practical implementation and analysis of algorithms will be emphasized through programming assignments and problem-solving exercises."
          }
        />
      );
    case "/full-stack-development" || "/live-full-stack-development":
      return (
        <CourseModule
          coursetitle={"Full Stack Development"}
          imgtitle={fullstack}
          courseDescriptionText={
            <>
              <p>
                Full Stack Development refers to the ability to develop both the
                front-end and back-end components of a web application. A Full
                Stack Web Developer is proficient in both client-side
                technologies (HTML, CSS, JavaScript) for designing user
                interfaces and server-side technologies (such as Node.js,
                Python, or PHP) for handling data and business logic. Full Stack
                Web Developers have a comprehensive understanding of the entire
                web development process, from concept to deployment.
              </p>
              <p>
                The Full Stack Development course provides students with the
                skills and knowledge necessary to develop dynamic and
                interactive web applications. This course covers both front-end
                and back-end technologies and emphasizes hands-on learning
                through projects and practical exercises.
              </p>
            </>
          }
          paraElements={
            <>
              <p>
                This certificate validates the student's ability to apply
                theoretical concepts to real-world projects and demonstrates
                their competence in specific areas of expertise.
              </p>
              <p>
                Upcoming collaborations with Nascom, NSDC, and Skillindia, which
                help students to get placed in their dream companies.
              </p>
              <p>
                A internship certificate from a reputable company like SEOAK
                carries weight and credibility within the industry.
              </p>
              <p>
                It signifies that the student has received practical training
                and exposure to industry-relevant tools, technologies, and
                practices, making them more attractive to potential employers.
              </p>
              <p>
                Including an internship certificate on a resume or CV adds
                weight and value to the student's profile.
              </p>
              <p>
                Completing an internship in our company provides students with
                opportunities to network with professionals in the field.
              </p>
              <p>
                Students can connect with mentors, industry experts, and fellow
                interns, expanding their professional network and gaining
                valuable contacts for future career development.
              </p>
              <p>
                Receiving an internship certificate from our company is an
                accomplishment that can boost a student's confidence.
              </p>
              <p>
                A internship certificate from our company enhances a student's
                employability. It demonstrates to potential employers that they
                have gained practical experience and have been exposed to the
                latest industry trends and technologies.
              </p>
              <p>
                Our certificates encourage lifelong learning and continuous
                professional&nbsp;development.
              </p>
            </>
          }
          outComes={
            <>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Over 48 Lectures And 72 Hours Of Content!
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Theoretical And Practical Training Included Real-Time Projects.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Best suitable for beginners to advanced level users and who
                learn faster when demonstrated.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Course content is Designed by considering current trending
                technologies and the job market.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical assignments at the end of every session.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical real-time experience with live projects for every end
                of the topic.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Unlimited resources, with overall six&nbsp;courses&nbsp;LMS.
              </li>
            </>
          }
          ciurriculum={
            "Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as."
          }
        />
      );
    case "/data-science" || "live-data-science":
      return (
        <CourseModule
          coursetitle={"Data Science"}
          imgtitle={dataScience}
          courseDescriptionText={
            <>
              <p>
                Data Science is an interdisciplinary field that combines
                statistics, mathematics, programming, and domain expertise to
                extract valuable insights and knowledge from data. It involves
                analyzing and interpreting large volumes of data to make
                informed business decisions, solve complex problems, and drive
                innovation. Data Science has applications in various industries,
                including finance, healthcare, marketing, and technology. The
                Data Science Fundamentals course provides students with a
                comprehensive understanding of the core concepts and techniques
                used in data science.
              </p>
            </>
          }
          paraElements={
            <>
              <p>
                This certificate validates the student's ability to apply
                theoretical concepts to real-world projects and demonstrates
                their competence in specific areas of expertise.
              </p>
              <p>
                Upcoming collaborations with Nascom, NSDC, and Skillindia, which
                help students to get placed in their dream companies.
              </p>
              <p>
                A internship certificate from a reputable company like SEOAK
                carries weight and credibility within the industry.
              </p>
              <p>
                It signifies that the student has received practical training
                and exposure to industry-relevant tools, technologies, and
                practices, making them more attractive to potential employers.
              </p>
              <p>
                Including an internship certificate on a resume or CV adds
                weight and value to the student's profile.
              </p>
              <p>
                Completing an internship in our company provides students with
                opportunities to network with professionals in the field.
              </p>
              <p>
                Students can connect with mentors, industry experts, and fellow
                interns, expanding their professional network and gaining
                valuable contacts for future career development.
              </p>
              <p>
                Receiving an internship certificate from our company is an
                accomplishment that can boost a student's confidence.
              </p>
              <p>
                A internship certificate from our company enhances a student's
                employability. It demonstrates to potential employers that they
                have gained practical experience and have been exposed to the
                latest industry trends and technologies.
              </p>
              <p>
                Our certificates encourage lifelong learning and continuous
                professional&nbsp;development.
              </p>
            </>
          }
          outComes={
            <>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Over 48 Lectures And 72 Hours Of Content!
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Theoretical And Practical Training Included Real-Time Projects.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Best suitable for beginners to advanced level users and who
                learn faster when demonstrated.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Course content is Designed by considering current trending
                technologies and the job market.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical assignments at the end of every session.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical real-time experience with live projects for every end
                of the topic.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Unlimited resources, with overall six&nbsp;courses&nbsp;LMS.
              </li>
            </>
          }
          ciurriculum={
            "Data Science is an interdisciplinary field that combines statistics, mathematics, programming, and domain expertise to extract valuable insights and knowledge from data. It involves analyzing and interpreting large volumes of data to make informed business decisions, solve complex problems, and drive innovation. Data Science has applications in various industries, including finance, healthcare, marketing, and technology."
          }
        />
      );
    case "/cloud-computing" || "/live-cloud-computing":
      return (
        <CourseModule
          coursetitle={"Cloud Computing"}
          imgtitle={CloudComputing}
          courseDescriptionText={
            <>
              <p>
                Cloud Computing is a paradigm that involves delivering computing
                resources, such as servers, storage, databases, and software,
                over the internet. It enables businesses and individuals to
                access and utilize scalable and on-demand computing
                infrastructure without the need for significant upfront
                investment in hardware and maintenance. Cloud Computing offers
                flexibility, scalability, cost-effectiveness, and ease of
                management, making it a vital technology in various industries.
              </p>
              <p>
                The Cloud Computing Fundamentals course provides students with a
                comprehensive understanding of the core concepts and principles
                of cloud computing. This course is suitable for individuals who
                want to gain knowledge of cloud computing and its applications
                in various domains. Students will learn about different cloud
                service models (Infrastructure as a Service, Platform as a
                Service, Software as a Service), cloud deployment models
                (public, private, hybrid), and essential cloud technologies and
                tools.
              </p>
            </>
          }
          paraElements={
            <>
              <p>
                This certificate validates the student's ability to apply
                theoretical concepts to real-world projects and demonstrates
                their competence in specific areas of expertise.
              </p>
              <p>
                Upcoming collaborations with Nascom, NSDC, and Skillindia, which
                help students to get placed in their dream companies.
              </p>
              <p>
                A internship certificate from a reputable company like SEOAK
                carries weight and credibility within the industry.
              </p>
              <p>
                It signifies that the student has received practical training
                and exposure to industry-relevant tools, technologies, and
                practices, making them more attractive to potential employers.
              </p>
              <p>
                Including an internship certificate on a resume or CV adds
                weight and value to the student's profile.
              </p>
              <p>
                Completing an internship in our company provides students with
                opportunities to network with professionals in the field.
              </p>
              <p>
                Students can connect with mentors, industry experts, and fellow
                interns, expanding their professional network and gaining
                valuable contacts for future career development.
              </p>
              <p>
                Receiving an internship certificate from our company is an
                accomplishment that can boost a student's confidence.
              </p>
              <p>
                A internship certificate from our company enhances a student's
                employability. It demonstrates to potential employers that they
                have gained practical experience and have been exposed to the
                latest industry trends and technologies.
              </p>
              <p>
                Our certificates encourage lifelong learning and continuous
                professional&nbsp;development.
              </p>
            </>
          }
          outComes={
            <>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Over 48 Lectures And 72 Hours Of Content!
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Theoretical And Practical Training Included Real-Time Projects.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Best suitable for beginners to advanced level users and who
                learn faster when demonstrated.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Course content is Designed by considering current trending
                technologies and the job market.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical assignments at the end of every session.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical real-time experience with live projects for every end
                of the topic.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Unlimited resources, with overall six&nbsp;courses&nbsp;LMS.
              </li>
            </>
          }
          ciurriculum={
            "Cloud Computing is a paradigm that involves delivering computing resources, such as servers, storage, databases, and software, over the internet. It enables businesses and individuals to access and utilize scalable and on-demand computing infrastructure without the need for significant upfront investment in hardware and maintenance. Cloud Computing offers flexibility, scalability, cost-effectiveness, and ease of management, making it a vital technology in various industries."
          }
        />
      );
    case "/cyber-security" || "/live-cyber-security":
      return (
        <CourseModule
          coursetitle={"Cyber Security"}
          imgtitle={CyberSecurity}
          courseDescriptionText={
            <>
              <p>
                Cybersecurity involves protecting computer systems, networks,
                and data from unauthorized access, breaches, and attacks. It
                encompasses various practices and technologies aimed at
                safeguarding digital assets and ensuring the confidentiality,
                integrity, and availability of information. In today's
                interconnected world, cybersecurity is crucial to protect
                individuals, organizations, and governments from cyber threats,
                such as malware, hacking, data breaches, and identity theft.
              </p>
              <p>
                The Cybersecurity Fundamentals course provides students with a
                comprehensive understanding of the principles and practices of
                cybersecurity. This course is suitable for individuals who want
                to gain knowledge and skills in securing computer systems and
                networks.
              </p>
            </>
          }
          paraElements={
            <>
              <p>
                This certificate validates the student's ability to apply
                theoretical concepts to real-world projects and demonstrates
                their competence in specific areas of expertise.
              </p>
              <p>
                Upcoming collaborations with Nascom, NSDC, and Skillindia, which
                help students to get placed in their dream companies.
              </p>
              <p>
                A internship certificate from a reputable company like SEOAK
                carries weight and credibility within the industry.
              </p>
              <p>
                It signifies that the student has received practical training
                and exposure to industry-relevant tools, technologies, and
                practices, making them more attractive to potential employers.
              </p>
              <p>
                Including an internship certificate on a resume or CV adds
                weight and value to the student's profile.
              </p>
              <p>
                Completing an internship in our company provides students with
                opportunities to network with professionals in the field.
              </p>
              <p>
                Students can connect with mentors, industry experts, and fellow
                interns, expanding their professional network and gaining
                valuable contacts for future career development.
              </p>
              <p>
                Receiving an internship certificate from our company is an
                accomplishment that can boost a student's confidence.
              </p>
              <p>
                A internship certificate from our company enhances a student's
                employability. It demonstrates to potential employers that they
                have gained practical experience and have been exposed to the
                latest industry trends and technologies.
              </p>
              <p>
                Our certificates encourage lifelong learning and continuous
                professional&nbsp;development.
              </p>
            </>
          }
          outComes={
            <>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Over 48 Lectures And 72 Hours Of Content!
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Theoretical And Practical Training Included Real-Time Projects.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Best suitable for beginners to advanced level users and who
                learn faster when demonstrated.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Course content is Designed by considering current trending
                technologies and the job market.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical assignments at the end of every session.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical real-time experience with live projects for every end
                of the topic.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Unlimited resources, with overall six&nbsp;courses&nbsp;LMS.
              </li>
            </>
          }
          ciurriculum={
            "Cybersecurity involves protecting computer systems, networks, and data from unauthorized access, breaches, and attacks. It encompasses various practices and technologies aimed at safeguarding digital assets and ensuring the confidentiality, integrity, and availability of information. In today's interconnected world, cybersecurity is crucial to protect individuals, organizations, and governments from cyber threats, such as malware, hacking, data breaches, and identity theft."
          }
        />
      );
    case "/advanced-ai" || "/advanced-ai":
      return (
        <CourseModule
          coursetitle={"Advanced AI"}
          imgtitle={AdvancedAi}
          courseDescriptionText={
            <>
              <p>
                Advanced AI refers to the advanced techniques and applications
                of artificial intelligence (AI) that go beyond the fundamentals.
                It involves utilizing complex algorithms, deep learning
                architectures, and cutting-edge technologies to solve
                challenging problems and achieve high levels of performance in
                AI systems. Advanced AI techniques include deep learning,
                natural language processing, computer vision, reinforcement
                learning, and generative models. It finds applications in
                various fields, such as healthcare, finance, robotics, and
                autonomous systems.
              </p>
              <p>
                The Advanced AI Concepts and Techniques course provides students
                with a comprehensive understanding of advanced AI methodologies
                and their applications. Through hands-on projects and case
                studies, students will gain practical experience in applying
                advanced AI techniques to real-world problems.
              </p>
            </>
          }
          paraElements={
            <>
              <p>
                This certificate validates the student's ability to apply
                theoretical concepts to real-world projects and demonstrates
                their competence in specific areas of expertise.
              </p>
              <p>
                Upcoming collaborations with Nascom, NSDC, and Skillindia, which
                help students to get placed in their dream companies.
              </p>
              <p>
                A internship certificate from a reputable company like SEOAK
                carries weight and credibility within the industry.
              </p>
              <p>
                It signifies that the student has received practical training
                and exposure to industry-relevant tools, technologies, and
                practices, making them more attractive to potential employers.
              </p>
              <p>
                Including an internship certificate on a resume or CV adds
                weight and value to the student's profile.
              </p>
              <p>
                Completing an internship in our company provides students with
                opportunities to network with professionals in the field.
              </p>
              <p>
                Students can connect with mentors, industry experts, and fellow
                interns, expanding their professional network and gaining
                valuable contacts for future career development.
              </p>
              <p>
                Receiving an internship certificate from our company is an
                accomplishment that can boost a student's confidence.
              </p>
              <p>
                A internship certificate from our company enhances a student's
                employability. It demonstrates to potential employers that they
                have gained practical experience and have been exposed to the
                latest industry trends and technologies.
              </p>
              <p>
                Our certificates encourage lifelong learning and continuous
                professional&nbsp;development.
              </p>
            </>
          }
          outComes={
            <>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Over 48 Lectures And 72 Hours Of Content!
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Theoretical And Practical Training Included Real-Time Projects.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Best suitable for beginners to advanced level users and who
                learn faster when demonstrated.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Course content is Designed by considering current trending
                technologies and the job market.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical assignments at the end of every session.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical real-time experience with live projects for every end
                of the topic.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Unlimited resources, with overall six&nbsp;courses&nbsp;LMS.
              </li>
            </>
          }
          ciurriculum={
            "Advanced AI refers to the advanced techniques and applications of artificial intelligence (AI) that go beyond the fundamentals. It involves utilizing complex algorithms, deep learning architectures, and cutting-edge technologies to solve challenging problems and achieve high levels of performance in AI systems. Advanced AI techniques include deep learning, natural language processing, computer vision, reinforcement learning, and generative models. It finds applications in various fields, such as healthcare, finance, robotics, and autonomous systems."
          }
        />
      );
    case "/chat-gpt" || "/live-chat-gpt":
      return (
        <CourseModule
          coursetitle={"Chat GPT"}
          imgtitle={Chatgpt}
          courseDescriptionText={
            <>
              <p>
                ChatGPT is a state-of-the-art language model developed by
                OpenAI. It is powered by GPT-3.5, an advanced deep-learning
                architecture, and is designed to generate human-like responses
                and engage in interactive conversations with users. ChatGPT can
                provide information, answer questions, assist with tasks, and
                engage in natural language conversations across a wide range of
                topics. It leverages a vast amount of knowledge and contextual
                understanding to deliver meaningful and coherent responses.
              </p>
              <p>
                The ChatGPT Fundamentals course provides students with an
                understanding of the capabilities and usage of ChatGPT for
                various applications. This course is suitable for individuals
                interested in learning about natural language processing and
                conversational AI. Through hands-on exercises and projects,
                students will gain practical experience in utilizing ChatGPT for
                natural language understanding and generation.
              </p>
            </>
          }
          paraElements={
            <>
              <p>
                This certificate validates the student's ability to apply
                theoretical concepts to real-world projects and demonstrates
                their competence in specific areas of expertise.
              </p>
              <p>
                Upcoming collaborations with Nascom, NSDC, and Skillindia, which
                help students to get placed in their dream companies.
              </p>
              <p>
                A internship certificate from a reputable company like SEOAK
                carries weight and credibility within the industry.
              </p>
              <p>
                It signifies that the student has received practical training
                and exposure to industry-relevant tools, technologies, and
                practices, making them more attractive to potential employers.
              </p>
              <p>
                Including an internship certificate on a resume or CV adds
                weight and value to the student's profile.
              </p>
              <p>
                Completing an internship in our company provides students with
                opportunities to network with professionals in the field.
              </p>
              <p>
                Students can connect with mentors, industry experts, and fellow
                interns, expanding their professional network and gaining
                valuable contacts for future career development.
              </p>
              <p>
                Receiving an internship certificate from our company is an
                accomplishment that can boost a student's confidence.
              </p>
              <p>
                A internship certificate from our company enhances a student's
                employability. It demonstrates to potential employers that they
                have gained practical experience and have been exposed to the
                latest industry trends and technologies.
              </p>
              <p>
                Our certificates encourage lifelong learning and continuous
                professional&nbsp;development.
              </p>
            </>
          }
          outComes={
            <>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Over 48 Lectures And 72 Hours Of Content!
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Theoretical And Practical Training Included Real-Time Projects.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Best suitable for beginners to advanced level users and who
                learn faster when demonstrated.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Course content is Designed by considering current trending
                technologies and the job market.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical assignments at the end of every session.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical real-time experience with live projects for every end
                of the topic.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Unlimited resources, with overall six&nbsp;courses&nbsp;LMS.
              </li>
            </>
          }
          ciurriculum={
            "The ChatGPT Fundamentals course provides students with an understanding of the capabilities and usage of ChatGPT for various applications. This course is suitable for individuals interested in learning about natural language processing and conversational AI. Through hands-on exercises and projects, students will gain practical experience in utilizing ChatGPT for natural language understanding and generation."
          }
        />
      );
    default:
      return (
        <CourseModule
          coursetitle={"C Language Programming - Advanced"}
          imgtitle={cimage}
          courseDescriptionText="C is a versatile and widely used programming language known for its efficiency, low-level capabilities, and portability. It serves as the foundation for many other programming languages and is commonly used in systems programming, embedded systems development, game development, and more. With its extensive libraries and direct access to hardware, C is an essential language for building high-performance applications."
          paraElements={
            <>
              <p>
                This certificate validates the student's ability to apply
                theoretical concepts to real-world projects and demonstrates
                their competence in specific areas of expertise.{" "}
              </p>
              <p>
                Upcoming collaborations with Nascom, NSDC, and Skillindia, which
                help students to get placed in their dream companies.
              </p>
              <p>
                A internship certificate from a reputable company like SEOAK
                carries weight and credibility within the industry.
              </p>
              <p>
                It signifies that the student has received practical training
                and exposure to industry-relevant tools, technologies, and
                practices, making them more attractive to potential employers.
              </p>
              <p>
                Including an internship certificate on a resume or CV adds
                weight and value to the student's profile.
              </p>
              <p>
                Completing an internship in our company provides students with
                opportunities to network with professionals in the field.
              </p>
              <p>
                Students can connect with mentors, industry experts, and fellow
                interns, expanding their professional network and gaining
                valuable contacts for future career development.
              </p>
              <p>
                Receiving an internship certificate from our company is an
                accomplishment that can boost a student's confidence.
              </p>
              <p>
                A internship certificate from our company enhances a student's
                employability. It demonstrates to potential employers that they
                have gained practical experience and have been exposed to the
                latest industry trends and technologies.
              </p>
              <p>
                Our certificates encourage lifelong learning and continuous
                professional&nbsp;development.
              </p>
            </>
          }
          outComes={
            <>
              <li className="list-styles">
                <i
                  style={{
                    color: "#ffb606",
                  }}
                  className="fas fa-check-double"
                />
                7-10 hours of content!
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />
                Theoretical and practical training included real-time projects.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Best suitable for beginners to advanced level users and who
                learn faster when demonstrated.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Course content is Designed by considering current trending
                technologies and the job market.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical assignments at the end of every session.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Practical real-time experience with live projects for every end
                of the topic.
              </li>
              <li>
                <i
                  className="fas fa-check-double"
                  style={{
                    color: "#ffb606",
                  }}
                />{" "}
                Unlimited resources, with overall six&nbsp;courses&nbsp;LMS.
              </li>
            </>
          }
          ciurriculum="C is a versatile and widely used programming language known for its efficiency, low-level capabilities, and portability. It serves as the foundation for many other programming languages and is commonly used in systems programming, embedded systems development, game development, and more. With its extensive libraries and direct access to hardware, C is an essential language for building high-performance applications."
        />
      );
  }
};
