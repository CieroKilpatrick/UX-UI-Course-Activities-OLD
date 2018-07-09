## 16.1 Lesson Plan - The Zen of Coding (6:30 PM)

### Overview

Day 1 will cover the basic structure of an HTML page. Students will also be introduced to basic git functionalities. By the end of class, they will have the skills to create and publish a basic HTML webpage.

### Instructor Notes

- Today your students may seem "lost." Make sure they know that you are there for them and they can succeed only if they persist through the challenges. 

- Today's class serves as an introduction after all. Students will get more practice with these technologies in upcoming classes.

- Use the [16.1-Web-For-Designers.pptx](https://drive.google.com/open?id=1XyiIn_C3G7LG6IxGtonfw3knUanPW6gh) slide show provided as an initial guide for today's class.

- Many of your students may come to class with "partially" installed tools. They might having gotten lost during the installation process. 

- By the end of class, you must make sure **everyone** one of your students has:

  - GitKraken (with SSH Authentication)
  
  - VS Code installed
  
  - GitHub account

- Have your TAs reference [16-Day-TimeTracker](TimeTracker.md) to help keep track of time during class.

- **Note:** On day 3, students will begin project research. Consider creating students groups today and add the groups to the day 3 slides.  

---

### Class Objectives

- Students will be able to identify and implement the main html components of a webpage (header, footer, body, div, p, a, etc.)
- Students will be able to use and articulate the benefits of semantic markup.
- Students will be able to identify the difference between git and Github.
- Students will be able to implement basic version control using GitKraken (add, commit, push, pull).
- Students will be able to host and make changes to a page using Github pages.

---

### 1. Instructor Do: Web Development Intro (Slides 3-12) (10 mins) (Critical)

- Open [16.1-Web-For-Designers.pptx](https://drive.google.com/open?id=1XyiIn_C3G7LG6IxGtonfw3knUanPW6gh). 

- Let students know they will be spending the remainder of the course learning Web Development. 

  - Web Development encompasses the technical skills needed to build a website.

- First, describe what is meant by web development.

  - Web development is all the different efforts required to create and host a website including design.

  - Among technology professionals, however, the term "web-development" is normally used the describe the non-design aspects of creating a website.

  - Web development involves technical skills like coding and writing markup. 
  
    - A markup language is one that annotates text in a way that gives the computer instructions on how to manipulate the text. 
    
    - Students will see an example of this when they begin to write HTML.

- Some students may feel like Web Development is not a skill that is desired by employers or part of a designer's job. They might feel that those responsibilities fall only on developers. The next few slides show job descriptions that demonstrate the opposite!

  - Having a UX/UI background coupled with experience in web-development is extremely useful and desired by employers. The job listings in these slides request experience with HTML, CSS, and Javascript, which are the three main languages used in creating websites.

  - Have a discussion about different job postings your students may have found.

  - Explain that some overlap between design and development is expected, but it is very rare for a candidate to be highly proficient in both skill sets.

- Use the following slides to give students context of why it is important to learn web development.

  - Understanding the medium for which they are designing allows UX/UI professionals to:

    - Design effectively by understanding possibilities and constraints.

    - Understand the effort involved in implementing elements of the user experience.

    - Communicate effectively with developers due to a greater understanding of their work.

    - Rapidly create prototypes to share with developers.

    - Make and test changes to existing websites.

- Having a UX/UI background gives designers a unique perspective on web development. It allows them to fully understand the possibilities of bringing their design to life.

### 2. Instructor Do: The Learning Path (Slides 13-24) (5 mins) (Critical)

- Use the next couple slides to give students an overview of the remainder of the course.

  - Explain that students are going to be learning tools that are used in frontend development.

  - Web development encompasses the tasks needed to be performed to create and host a website, which is both frontend and backend. 
  
    - Frontend development refers only to aspects of the website that are consumed by the user.

    - Backend development refers only to aspects of the website that is the code which is processed on the server.
  
      - In other words, frontend developers create how a user sees and interacts with a webpage.

  - Briefly explain how frontend development is different than backend development. 
  
    - Backend developers create code that is separate from the user interface, but allows it to work. 
    
    - Explain that for a website, like YouTube, the frontend is the visual aspect you see and experience when searching for a video. 
    
    - The backend handles the logic behind the search, finds relevant videos in a database, and provides them to the frontend for display.
    
    - Students do not need to be too concerned with the relationship between frontend and backend development.

  - Explain that the three most common languages use with front end development are:

    - HTML (Hypertext Markup Language)

    - CSS (Cascading Style Sheets)
    
    - Javascript.

  - Give a brief overview of the uses and capabilities of each.

    - HTML defines the content and structure. 
    
      - It is used to create content and its purpose in the context of the document.

      - HTML is used to create headings, text, images, videos, forms, links, etc.

    - CSS defines the style. 
    
     - It is used to add color, define layout, set fonts, and create responsiveness.

    - Javascript defines the logic and interactivity
    
      - It is used to build dynamic webpages that react to user input.

  - Give students an overview of the remaining units, then go through the slides for each upcoming unit. Give students an idea of what they will be learning.
  
  - Examples of class activities or homework are included in each slide to give students am example of what they will be able to create.

    - Unit 16: Students will learn how to create and publish a webpage while gaining a deeper understanding of the medium.

    - Unit 17: Students will use CSS to create a page layout and add responsiveness for various viewing window sizes (examples: phone, tablet, laptop).

    - Unit 18: Students will be able to create rapid prototypes to share with developers using Bootstrap's CSS.

    - Unit 19: Students will be able to make interactive and dynamic webpages using JavaScript and JQuery.

    - Unit 20: Students will understand the role and impact of web design choices on performance and accessibility, and how those relate to user experience.

    - Unit 21: Students will conduct user testing to evaluate a web design.

    - Unit 22: Students will iterate over their portfolio website and prepare it for sharing with future employers.

    - Unit 23 & 24: Project 3 - Students will combine UX/UI design with web development skills to build a website that solves a human need.

### 3. Instructor Do: The Joys of Learning to Code (Slides 25-34) (10 mins) (Critical)

- The next series of slides is meant to give students the "right" perspective on learning how to code.

  - Explain that this program will continue to not be a traditional college class. The instructional team is here to support students 100% of the way to really help them achieve their goals.

- To begin this section of the class off, take a few moments to assuage student fears of being a "beginner."

  - Let them know that having a humble attitude is the first requirement of being successful in this part of the program.

  - Coding is like nothing else these students have attempted to do. Their mastery of other subjects, their educational backgrounds, and their professional successes do not guarantee that they will do well here. The only thing that will guarantee success is hard work, humility, and a relentless desire to be better.

- Give students perspective on the "Path of Learning" — let them know that it will take persistence, confidence, and a willingness to fail.

  - First, learning to code is tough, intimidating, and frustrating at times. It takes persistance! Coding is hard. It will take time. There is no way around that.

  - Second, because of how hard this can be, there will be many moments where students will doubt themselves. Take this chance to help them overcome this obstacle in advance by building up their confidence. Tell them everyone involved in coding started just like they did, that it takes time, but they have what it takes.

  - Lastly, everyone who wants to learn to code has to be willing to fail. Paradoxically, creating and troubleshooting bugs (or mistakes) in code is beneficial to the learning process.

- Use the next couple slides to re-iterate that although building a website feels like a tall order and at times students may feel overwhelmed or intimidated, they should utilize two important resources they have at their disposal.

  - Google-Fu - The term "Google-Fu" refers to skill in using search engines to find information efficiently. For beginners, it is easy to believe that experienced developers do not utilize internet resources often. That is false! In reality, it is exactly what an experienced developer would do.

  - Classmates are a great resource and support system for students!  Assure them that the most successful students in the program continually reach out for help and ideas.

- Let them know that although building a website feels like a tall order, the skills they will gain in the next few weeks are worth it. As a result, they will be in a select class of designers possessing frontend development knowledge.

- Finally and most importantly, coding is exciting and fun. With each lesson, students will learn new skills that will allow them to improve their published products.

- Give one final note of encouragement before moving on.

### 4. Instructor Do: Hello, HTML! (Slides 35-42) (10 mins) (Critical)

- Welcome the class to their first true foray into the wonderful world of HTML.

  - HTML - HyperText Markup Language - is a markup language used for webpages.

  - It is one of the three base languages behind nearly every single website (the other two are CSS and JavaScript).

  - HTML is the standard for building web pages and defines all of the basic content on a page as well as a small portion of the formatting.

- Explain the following:

  - "Hyper" refers to the fact that text can be enhanced with links.

  - "Markup" means text is labeled as a certain kind of text so the browser knows how it should be displayed. Text can be marked as a heading, paragraph, list, etc.

- HTML describes the content of webpages using HTML elements.

  - *Tags* are used around each **element**. These tags are the markup.

  - Most elements have opening and closing tags. There are some exceptions.

  - Tags are defined by opening and closing greater than and less than symbols around them. Closing tags are identified by also including "/" inside the greater than and less than symbols.

  - An HTML element can have attributes and content.

    - Attributes are defined inside of the opening tag.

    - Content is defined between the opening and closing tags.

  - In the image below, the `a` tag defines a hyperlink. The `href` attribute indicates the link's destination, and the text will simply be displayed as "Link".

    ![atag.png](Images/atag.png)

- Use the next slide to explain the structure of a basic HTML document. Explain that there is nothing particularly special about a browser. The browser simply reads text and displays it in agreed-upon ways. The text is the HTML. You are instructing the browser on the type of content and how it is to be displayed by using elements like lists, images, and tables.

### 5. Everyone Do:  VS Code Basics (10 mins) (Critical)

- The objective of this activity is to familiarize students with VS Code. Students should follow along as you demonstrate creating files and folders with VS Code and creating a basic HTML document.

- First, ensure that students have VS Code installed on their computers. If students do not have the VS Code on their machines, provide them with the [VS Code - Download Link](https://code.visualstudio.com/Download).

- Explain to students that VS Code is a code editor with features that make it easier to write, edit, and read code. They will gain a better understanding of the features of VS Code in the coming weeks as they build their coding toolkit.

- Let students know that VS Code allows users to customize themes and preferences so their editor may look slightly different than the one you are displaying, but the basic functionality is the same.

- Ask students to follow along as you demonstrate.

  - Open VS Code.

  - Choose `Add workspace folder...`/

    ![VS Code - Open](Images/VSIntroOpen.png)

  - Create a new folder.

    ![VS Code - Folder](Images/VSIntroFolder.png)

  - After the folder is created, a navigation bar (VS Code Explorer) appears at the left.

  - Select the folder and create a new file using the button shown below.

    ![VS Code - Nav](Images/VSIntroNav.png)

  - Name the file `index.html`.

  - Explain that by using the file extension `.html`, VS Code now knows which features should be enabled.

  - VS Code comes with code snippets built in. Create all the code needed to set up your HTML file using snippets.

    - On the first line of the document type an exclamation point. Notice a window appears. The first choice should be `!` with "Emmet Abbreviation" to the right. Either click on the first choice or hit enter.

    ![VS Code - Emmet](Images/VSIntroEmmet.png)

  - The code generated is code that is required to create an HTML document.

    ![VS Code - Code](Images/VSIntroCode.png)

  - Save the file. `Command+S` is the "Save" shortcut on a Mac. `Ctrl+S` is the shortcut on a PC.

  - Files with saved changes will not have the circle next to the filename on the tab.

    ![VS Code - Saving](Images/VSIntroSaving.png)

  - Show students how to install a VS Code extension. The extension installed here will allow students to open their HTML documents in a browser from VS Code.

    - Have students click the "Extensions" shortcut to the left.

    ![VS Code - Extensions](Images/VSIntroCExtensions.png)

    - In the search bar, search for "open in browser". Click on the option by "TechER".

    - Click "Install".

    ![VS Code - Code](Images/VSIntroExtInstall.png)

    - Click "Reload".

    ![VS Code - Code](Images/VSIntroExtReload.png)

- Answer any questions before moving on.

### 6. Everyone Do: Intro to HTML (10 mins) (Critical)

- This activity will familiarize students with basic HTML elements and increase their awareness of VS Code snippets available to them. It is important that students feel successful with their first coding activity so make sure students are keeping up and have your TAs ready to assist them.

- Use the code in [01-Evr_IntroHTML/IntroHTML.html](Activities/Solved/01-Evr_IntroHTML/IntroHTML.html) as a reference as you live code (type the code in real time). Use the HTML created in the last activity and have students follow along.

  - Change the title text. Remind students that appears on the page's browser tab and must be in the `<head>` element.

    ![firstHTMLTitle.png](Images/firstHTMLTitle.png)

  - Move to the `<body>` tag. Remind students that all content rendered to the page goes here.

  - Add a header. As with other tags, VS Code will automatically set up the elements with opening and closing tags (if needed) and some attributes.

  - Type "h1" and then `TAB` or `ENTER` to use the built in snippets.

    ![firstHTMLSnippet.gif](Images/firstHTMLSnippet.gif)

  - Next, create a paragraph element using the `<p>` tag. Use the Lorem Ipsum placeholder text.

  - Show students how to automatically generate the "Lorem Ipsum" text by typing the word `lorem` (lower case), and hitting `TAB` or `ENTER`. If students have trouble with this, slack the text out to students.

    ![firstHTMLLorem.gif](Images/firstHTMLLorem.gif)

  - Slack out the [spongebob image](Activities/Solved/01-Evr_IntroHTML/Images/spongebob.jpg). Instruct students to make an image folder in the same folder as the HTML file, and put this image in the folder. Alternatively, students can use their own image.

  - Next, add an image element using VS Code's snippets. Notice that a closing tag is not generated. An image element does not use a closing tag in HTML.

  - Have students define the `src` attribute as an image link or filepath. This is the location of the image. It can be an image address from the web or a filepath for an image stored on their computer.

  - The `alt` attribute specifies alternate text for an image in case the image doesn't display.

    ![firstHTMLImage.png](Images/firstHTMLImage.png)

  - Add an anchor element, `<a>` to add a link to the page. Remind students that the `href` attribute will be the URL for the link. The content will be the text of the link.

    ![firstHTMLLink.png](Images/firstHTMLLink.png)

  - Save the file, then open the HTML file in the browser and show students the page.

    - Instruct students on how to open page using the browser. Right click on the HTML document in the VS Code explorer on the left then choose "Open in the Default Browser". They should have Chrome set as their default browser.

    ![firstHTMLOpenBrowser.png](Images/firstHTMLOpenBrowser.png)

    ![firstHTMLNoBreak.png](Images/firstHTMLNoBreak.png)

  - Take a moment to note that some HTML elements are block-level elements. These elements will always start on a new line. In this example, the header and paragraph elements are block-level elements. Images and links are an inline elements. Inline elements don't start on newlines and take up as much space as needed.

  - Force the link to go to the next line by using the `<br>` tag after the image element.

    ![firstHTMLbreak.png](Images/firstHTMLbreak.png)

  - Save and show students the result in the browser.

    ![firstHTMLWithBreak.png](Images/firstHTMLWithBreak.png)

  - Add two more links to the page. Make one bold by wrapping it in the `<strong>` tag, and the other a placeholder link. Explain that placeholder links are useful when making prototypes.

  - Remember to use `<br>` tags between the links since `<a>` are inline elements.

    ![firstHTMLTwoLinks.png](Images/firstHTMLTwoLinks.png)

- Display the page in the browser one last time. Answer any questions before moving on.

### 7. Students Do: My First HTML (15 mins) (Critical)

- It is now time for students practice building HTML from scratch. Slack out the instructions. Direct them to [W3Schools - HTML Element Reference](https://www.w3schools.com/tags/default.asp) for reference. Make sure you and your TAs are available for help.

- **Instructions**

  - [02-Stu_FirstHTML/README.md](Activities/Unsolved/02-Stu_FirstHTML/README.md)

### 8. Instructor Do: Review My First HTML (10 mins) (Critical)

- Open [FirstHTML_Regular.html](Activities/Solved/02-Stu_FirstHTML/FirstHTML_Regular.html) in VS Code and walk students through the solution.

  - The solution closely mirrors the previous activity.

  - Briefly go over the structure of the hyperlink and image elements.

    - Attributes go inside the opening tag. Content goes between the opening and closing tag.

    - The image element does not have a closing tag.

  - Reinforce the use of good indentation practices. Messy code will still render in a browser, but it is harder to find errors, read, and maintain. Build good practices now!

    - A block of code can be indented or un-indented in VS Code by using shortcuts. First, highlight the block of code you wish to edit. `Ctrl+]` (PC) or `Command+]` (Mac) will indent the block while `Ctrl+[` (PC) or `Command+[` (Mac) will un-indent.

    ![stu_firstHTMLSolution.png](Images/stu_firstHTMLSolution.png)

- Briefly cover the [bonus solution](Activities/Solved/02-Stu_FirstHTML/FirstHTML_Bonus.html) and answer whatever questions the class may have. Make sure to cover lists and iframes. Don't spend too much time on tables. Students will see them in the next activity.

  - **Lists**

    - `<ol>`: Ordered List - List Items (`<li>`) will be numbered. Changing the order would change the meaning of the list.

    - `<ul>`: Unordered List - List Items (`<li>`) will be bulleted. The order has no effect on the meaning of the list.

    ![stu_firstHTMLLists.png](Images/stu_firstHTMLLists.png)

  - **Inline Frames**

    - Inline Frames, or iframes, are used to embed an another HTML document in the page. In this case, a YouTube Video is embedded.

    ![stu_firstHTMLIFrame.png](Images/stu_firstHTMLIFrame.png)

  - **Tables**

    - `<tr>`: Defines a row of data.

    - `<th>`: Defines a header cell.

    - `<td>`: Defines a data cell.

    ![stu_firstHTMLTable.png](Images/stu_firstHTMLTable.png)

### 9. BREAK (15 mins)

### 10. Partners Do: Code Exploration (15 mins) (Critical)

- In this activity, students work in groups of two while exploring sematic code and new HTML elements. Students should reflect on how the page payout is linked to information architecture and note the that content is grouped logically.

- Slack out the [03-Par_CodeExploration](Activities/Solved/03-Par_CodeExploration) and the [instructions](Activities/Unsolved/03-Par_CodeExploration/README.md).

- **Files**

  - [03-Par_CodeExploration/CodeExploration.html](Activities/Unsolved/03-Par_CodeExploration/CodeExploration.html)

  - [03-Par_CodeExploration/weather.jpeg](Activities/Unsolved/03-Par_CodeExploration/Images/weather.jpeg)

- **Instructions**

  - [03-Par_CodeExploration/README.md](Activities/Unsolved/03-Par_CodeExploration/README.md)

- **Hints**

  - You may want to direct students to the following online resources for this activity.

    - [HTML5 Doctor - Element Index](http://html5doctor.com/element-index/)

    - [W3Schools - HTML Element Reference](https://www.w3schools.com/tags/default.asp)

### 11. Instructor Do: Review Code Exploration (5 mins) (Critical)

- In order to check for understanding, ask randomly ask students to discuss their answers to the activity questions.

  1. What is the significance of the `<section>`, `<article>`, `<header>`, `<nav>`, and `<footer>` tags?

  - `<section>`, `<article>`, `<header>`, `<nav>`, and `<footer>` are container elements. Semantically, they provide context to the page. `<section>` is normally a thematic grouping of content. In this case, news articles, weather forecast, and a sign up form. The remaining tags aid in providing semantics, grouping, and organization to the document.

  2. What visual element does the `<hr>` tag render to the page?  What semantics should the `<hr>` element provide?

  - The `<hr>` tag visually renders a horizontal line or page break. It also provides for thematic breaks. Using it with `<section>` is a bit redundant. Later, CSS styling will provide better visuals for separating content.

  3. The first paragraph element has three additional tags nested in the text. List the tags used and their purpose.

  - These tags are `<strong>`, `<em>`, and `<a>`.

  - `<strong>`:  Highlights relative importance to surrounding text.

  - `<em>`: Emphasizes text.

  - `<a>`: Creates a hyperlink. Might be used to provide additional reference on text.

  4. What is the significance of the `<table>`, `<thead>`, and `<tbody>` elements?

  - These are all semantic elements.

  5. Briefly summarize how to use `<tr>`, `<th>`, and `<td>` tags to structure a table.

  - Each row of the table needs a `<tr>` tag. The first row uses `<th>` tags inside of the `<tr>` to bold the header row. Additional rows have `<td>` elements nested inside for each data cell.

  6. List the tags used within the `<form>` tag and their semantic significance and/or the visual element they provide.

  - This `<form>` element uses `<label>`, `<input>`, `<select>`, `<option>`, and `<button>`.

  - `<label>` provides a label or caption for the input field, select object, or other form elements.

  - `<input>` signifies user input and provides an input box on the page.

  - `<select>` renders a dropdown menu. The `<option>` elements provide user choice.

  - `<button>` renders a clickable button.

  - Note the difference between the first two `<label>` and `<input>` tags and the last. Both elements render the same way to the page. Later, students will add attributes to these elements for user accessibility.

### 12. Students Do: HTML Student Bio Activity (15 mins) (Critical)

- The best way for students to get used to rapid prototyping is to practice!  Now, students will build HTML with bio content.

- Open up the solved version of [04-Stu_StudentBio](Activities/Solved/04-Stu_StudentBio/BasicBio.html) with a browser to demonstrate what students will be creating.

![bioSolution.png](Images/bioSolution.png)

- **Instructions**

  - [04-Stu_StudentBio/README.md](Activities/Unsolved/04-Stu_StudentBio/README.md)

### 13. Instructor Do: Live Code Instructor Bio Activity (10 mins) (Critical)

- Using [03-Stu_StudentBio](Activities/Solved/04-Stu_StudentBio/BasicBio.html) as a guide, live code a simple bio page for the class. Make sure to answer questions from the class whilst developing the code. Consider asking students what elements to add.

  - Bounce back and forth between the browser and the editor every time a new element is created. Part of the purpose of live-coding this is to give students time to fix things, get comfortable with the editor, and understand the best way to create HTML.

  - Encourage students to follow along/update their code whilst the code is covered.

  - Only demo the form if time allows. Otherwise, explain that the solution will be slacked out to the class.

  ![7-Bio](Images/7-Bio.png)

### 14. Instructor Do: Version Control with Git and GitHub (Slides 44-52) (5 mins) (Critical)

- Open [16.1-Web-For-Designers.pptx](https://drive.google.com/open?id=1XyiIn_C3G7LG6IxGtonfw3knUanPW6gh) and go over slides 44-52.

- Keeping multiple versions of designs causes clutter in file systems, takes up too much space, and gets confusing!  Git and GitHub (or any version control software) can help by keeping track of changes.

- Git is a version control system that allows developers to collaborate on projects simultaneously without overwriting each others work.

- Version control keeps track of changes to a file so that the file can be reverted to a previous state if needed. Google drive allows this feature on many Google products.

- GitHub allows users to host their Git repositories (repos) in order to store and share projects.

- Since GitHub is an extension of Git, it includes the same features. GitHub has version control and collaborative features like resolving conflicting changes to a file.

- GitHub also allows users to publish webpages using a service called GitHub Pages.

- This course uses a Git client called GitKraken to interact with GitHub. This provides a GUI to push and retrieve code from GitHub. The code (or design element) is created in the local Git repository and then "pushed" to GitHub to store and share. If another team member makes changes to the project, the changes would be "pulled" down to the local repository before additional iterations.

- Motivate students desire to learn about GitHub by contextualizing its use for UX/UI designers.

  - Understanding another developer tool aids efficient communication.

  - Start a discussion using the following questions.

    - You have just designed a set of icons and images you want the developer to use. How do you share them?

    - After the developer incorporated the icons on the webpage, they need to be updated. What does that process look like?

  - Developers can access design assets directly from the repo when building web interfaces. Therefore, a change made to those assets could be immediately changed on the website without adjusting code.

  - There are many indications that version control for designers is becoming more popular. Two examples of version control software made for designers are provided in the slides.

  - Have students turn to their neighbor and answer the following.

    1. Describe the concept of version control.

    1. What are some advantages to using a version control system?

### 15. Everyone Do: Using Github and GitKraken (10 mins) (Critical)

- Before beginning this activity, make sure students have a GitHub account and have GitKraken downloaded on their machines. Direct students to the websites listed below if needed.

  - [GitHub](https://github.com/)

  - [GitKraken](https://www.gitkraken.com/)

- Demonstrate how to create a GitHub repo and have students follow along.

  - Sign into GitHub.

  - If students have never signed in before, they might be prompted with a "Start a Project" button. If no button is present, click the `+` in the top right corner, and choose `New repository`.

    ![gitHubNewRepo.png](Images/gitHubNewRepo.png)

  - Create a name for the repo. Note that the name may not contain any spaces.

  - Add a description if you wish. It is good practice so visitors understand the project.

  - Check the box next to "Initialize this repository with a README".

  - Then, click "Create Repository".

    ![gitHubRepoOptions.png](Images/gitHubRepoOptions.png)

  - Copy the link for the repository.

    ![gitHubRepoCopy.png](Images/gitHubRepoCopy.png)

- Explain to students that they are now going to clone the repo to their machines allowing them to interact with them through GitKraken. The Git repo stored on their machine is known as the local repo while the rep stored on GitHub is referred to as the remote repo.

- Open GitKraken.

  - GitKraken should automatically guide students though connecting their GitHub account and the authentication process. If it does not, students can go to the "Preferences" menu, choose "Authentication", choose "GitHub.com", and click "Connect to GitHub".

    ![gitHubPref.png](Images/gitHubPref.png)

    ![gitHubAuth.png](Images/gitHubAuth.png)

  - Next, click the file icon in the top left hand corner and choose "Clone". Specify the desired filepath, paste the URL of the GitHub Repo, and click "Clone the repo!"

    ![gitHubClone.png](Images/gitHubClone.png)

  - Move or copy the HTML file for the bio page into the repo folder. Change the name to `index.html`. GitHub Pages requires that the website's home page be called `index.html`. This allows GitHub Pages to know what HTML file to render when a user visits the site.

  - The menu on the right shows new or changed files under "Unstaged Files"  In order for the files to be pushed to the GitHub repo, they must be staged and committed to the local repo first. Hover over `index.html`, and click "Stage File".

    ![gitHubStage.png](Images/gitHubStage.png)

    - Type a commit message and click "Commit changes..." at the bottom.

    ![gitHubCommit.png](Images/gitHubCommit.png)

- Push the changes to the GitHub repo using the Push button on the top menu.

    ![gitHubPush.png](Images/gitHubPush.png)

- Visit the GitHub repo. If needed, refresh the page and check that the new file is present.

  - Click "Settings".

    ![gitHubSettings.png](Images/gitHubSettings.png)

  - Scroll down to the section titled "GitHub Pages". Under "Source" use the dropdown menu to choose "master branch", and click "Save". The page is now published, and can be visited by clicking the given link. Have students visit their published pages!

    ![gitHubMaster.png](Images/gitHubMaster.png)

    ![gitHubLink.png](Images/gitHubLink.png)

### 16. Students Do: Bio Iteration (15 mins) (Critical)

- In this activity, students make adjustments to their bio webpage in their local Git repo, then push those changes up to GitHub as an iteration on their published page.

- **Instructions**

  - [05-Stu_BioIteration/README.md](Activities/Unsolved/05-Stu_BioIteration/README.md)

### 17. Instructor Do: Review Bio Iteration (5 mins) (Critical)

- Briefly review how to add images to a webpage using the `<img>` tag.

- Review how to stage files, make a commit, and push to GitHub. Pulling from the GitHub is not necessary since there were no changes since the last push. However, let students know that it is good practice to pull from the repo before pushing. Not doing so could cause merge conflicts. This is especially true in the case of cooperative work.

### 18. Instructor Do: Introduce Supplemental Videos (5 mins) (Critical)

- Slack out [Lesson 1.1 - My First HTML](https://www.YouTube.com/watch?v=ieb6Svbc10E).

- Let students know that this video can be used as a resource to help with with some of the skills learned in this class.

- The video also has a form within the description for feedback. We would appreciate that they fill out if they think anything in the video needs improvement.

### 19. Instructor Do: Demo Homework (5 mins) (Critical)

- Open up the [solution](../../../2-Homework/16-HTMLintro/Solutions/index.html) for this week's homework assignment to give the class an idea what they will be working to create.

- Let students know that this will be the homework assignment. It will be due on Saturday of the following week. More details will come at the next class.

### 20. Instructor Do: END (0 mins)

- In the next class, students will start to look at how to organize and layout information within a browser and how to improve the look and feel of a web page.

- Recommend reviewing HTML syntax along with homework and remind everyone that the more they memorize, the faster they will improve their coding and syntax debugging skills.

---

# LessonPlan & Slideshow Instructor Feedback

- Please click the link which best represents your overall feeling regarding today's class. It will link you to a form which allows you to submit additional (optional) feedback.

- [:heart_eyes: Great](https://www.surveygizmo.com/s3/4346059/UX-UI-Instructor-Feedback?section=16.1&lp_useful=great)

- [:grinning: Like](https://www.surveygizmo.com/s3/4346059/UX-UI-Instructor-Feedback?section=16.1&lp_useful=like)

- [:neutral_face: Neutral](https://www.surveygizmo.com/s3/4346059/UX-UI-Instructor-Feedback?section=16.1&lp_useful=neutral)

- [:confounded: Dislike](https://www.surveygizmo.com/s3/4346059/UX-UI-Instructor-Feedback?section=16.1&lp_useful=dislike)

- [:triumph: Not Great](https://www.surveygizmo.com/s3/4346059/UX-UI-Instructor-Feedback?section=16.1&lp_useful=not%great)

---

### Copyright

Trilogy Education Services © 2018. All Rights Reserved.
