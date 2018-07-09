## 16.3 Lesson Plan - Advanced CSS (10:00 AM)

### Overview

Today's class will dive into more advanced CSS topics and introduce the homework assignment.

---

### Instructor Notes

- Use the [16.3-Advanced-CSS.pptx](https://drive.google.com/open?id=106zsD9G5l93LiQnDJDVvz9_ZNbKOEVjr) slide show provided as an initial guide for today's class. Feel free to modify the slides slightly to fit your own style, but be sure to cover the same activities.

- Have your TAs reference [03-Day-TimeTracker](TimeTracker.md) to help keep track of time during class.

- Student groups for project 3 are needed for after the break.

---

### Class Objectives

- Students will be able to style a layout using floats.

- Students will understand how to use CSS positioning.

- Students will be introduced to the Bootstrap framework.

- Students will be introduced to their final project and begin working on a proposal and research plan.

---

### 1. Instructor Do: Welcome Class and Recap (Slides 1-10) (5 mins) (Critical)

- Open the [16.3-Advanced-CSS.pptx](https://drive.google.com/open?id=106zsD9G5l93LiQnDJDVvz9_ZNbKOEVjr) slide show and use it as a guide for today's class.

- Take a minute to welcome the class to day three of HTML/CSS before going through the agenda for the day.

- Take a poll of the class to gauge the pace of the new material.

  - "It's too fast!"

    - Students might wish the class could slow down so they can understand the topics. Remind students that they've already learned a lot up until this point - their work ethic can take them to the finish line.

    - Encourage and reassure students that it's OK if this part of the class feels tough and quick.

  - "I want extra materials!"

    - Students might want supplementary materials to help guide them through HTML, CSS and JavaScript.

    - While there's no definitive book that will cover every single topic, students can explore online resources such as [Code School](https://www.codeschool.com/) or Jon Duckett's books "HTML & CSS" and "JavaScript & jQuery"

  - Remind students to take advantage of office hours as well. That's what they are there for, after all!

- Ask if there are any topics that need clarification or further explanation. Take a few minutes to answer these questions, but not too long. Remind students to go back and look at earlier material to further strengthen their understanding.

  - Some major topics to cover at this time are...

    - HTML and CSS - Hypertext Markup Language and Cascading Style Sheets together define the content and aesthetics of a webpage, handling everything from the layouts, colors, fonts, and content placement.

    - CSS Syntax - CSS works by hooking onto selectors added into HTML using classes and identifiers. Classes use dot notation, IDs use hashtags, and elements just use their name. Once hooked, developers can apply styles to the selected elements using CSS.

### 2. Instructor Do: Floating Away (Slides 11-16) (20 mins) (Critical)

- This next topic will likely be tough for students to understand, so make sure to take some time to walk through it step-by-step with the class.

- Ask the class to raise their hands if they are familiar with word wrapping like that seen in Microsoft Word.

  - Call on a student who raised their hand to explain how it works structurally (ie. how an image/figure changes the flow of a text document).

- Explain the concept of flow to the class.

  - The idea that elements (text, images, links, sections, etc.) take up a set amount of space on the screen.

  - By default, every HTML element displayed in the browser is governed by this concept. This means that HTML elements force their adjacent elements to flow around them depending upon whether they are considered a "block" or "inline" element.

    - Block elements take up an entire line of space. Most browsers will render the majority of HTML elements as block elements.

    - Inline elements take up part of a line. By using `float` css properties, developers can display their HTML elements adjacently.

- CSS `float` properties are helpful insomuch as they allow elements to be displayed alongside one-another.  Sometimes, floats affect how a section is displayed.  For example, if a floated element is taller than the `<section>`, it can appear to overflow the element or extend beyond it.

  - This can be corrected by assigning the outer element a `clearfix` class and using the following CSS.

  - The CSS adds an element to the outer element (or parent).  `clear:both;` ensures no floats on either side.  `display`: block ensure it it displayed as a block element and therefore will be on a newline.

  ![clearfix.png](Images/clearfix.png)

  ```CSS
  .clearfix::after {
  content: "";
  display: block;
  clear: both;
  }
  ```

- Open [01-Ins_FloatingAway/no-float.html](Activities/01-Ins_FloatingAway/no-float.html) within the editor.

  - Point out that the site is a series of images inside `<div>` tags. Then open the file in a browser and make note of how the images are stacked.

    ![08-No-Float-Browser](Images/08-No-Float-Browser.png)

  - Open `style.css` side by side with `no-float.html` and point out the specific styling the class will be applying to their page.

    ![09-Add-Float-Editor](Images/09-Add-Float-Editor.png)

  - Either add the necessary HTML to `no-float.html` or open `add-float.html` to demonstrate the finished product.

- Consider calling on a student to explain what the HTML and CSS are doing in these files before answering whatever questions the class may have before moving onto the break.

### 3. Instructor Do: Pair programming (5 mins) (Critical)

- Before starting the activity, briefly introduce the concept of pair programming.

  - Explain that students will rarely be working by themselves on an entire project, but rather that they will be part of a larger team. This is particularly true when it comes to development work.

  - It's always helpful to have another person look over work, bounce ideas off of, and help get back on the right path.

- Have students partner up with the person next to them. They will work with this person for the rest of class.

  - If there's an uneven number, create one group of three or have a TA pair up with them.

### 4. Students Do: Floats Activity (Slides 18-20) (20 mins) (Critical)

- After students are paired up, introduce the activity. Students will be recreating a floated layout with a partner.

  ![11-Float-Layout](Images/11-Float-Layout.png)

- This activity is challenging. Students will have to use some CSS properties not previously used to get the page to look exactly like the image.  Students should try to get it as close as possible.  Let them know that you will go over the solution in detail after they do their best.

- Pay attention to groups that are further behind and have groups that finish early attempt to help them. Students should feel comfortable getting out of their seats to help one another.

- **Resources:**

  - [floats.html](Activities/02-Stu_FloatLayout/Unsolved/floats.html)

  - [floats.css](Activities/02-Stu_FloatLayout/Unsolved/floats.css)

- **Instructions:**

  - Use the files inside the folder to recreate the layout shown on the screen.

  - This will not be easy, but try your best! Ask the instructor and TAs for help if you get stuck.

  - If you finish early Slack the TAs or raise your hand to call their attention. TAs will reassign you to help others in the class.

- **Hints:**

  - Break down the layout into boxes and think about how to divide your work.

  - We've provided some styling to use a starting point.

### 5. Instructor Do: Floats Review (10 mins) (Critical)

- Open up the [solved version](Activities/02-Stu_FloatLayout/Solved/floats.html) of the previous activity and walk through the code line-by-line with the class, answering whatever questions students may have.

  - Make certain to point out the usage of the clearfix hack and explain again that it inserts an empty block element in the section element  after all existing elements including floats.  This makes the section extend to properly fit all inner elements.

    ```CSS
    section::after {
      content: "";
      display: block;
      clear: both;
    }
    ```

  - Point out the use of the `padding` CSS property.  Note that padding appears visually between the border of the outer element and the internal elements.

  - `margin-bottom` creates space outside of the element.

  ![floatsPaddingMargin.png](Images/floatsPaddingMargin.png)

  - Answer any other student questions before moving on.

### 6. Instructor Do: Positioning (Slides 21-27) (20 mins) (Critical)

- Floats are not the only way to position elements as there are also position rules that can be built into CSS.

  - `static`: The default positioning for elements.

  - `relative`: Positions elements relative to their static location in the document. These elements behave with and interact with other elements the same way they would as if they were positioned statically, except that you can use the `top`/`right`/`bottom`/`left` properties to move the elements *after* they have been placed into the document flow.

  - `absolute`: Positions elements relative to the nearest positioned ancestor (non-`static`). They are taken out of the flow of the document, taking up no space when placing other elements. These elements will move in the viewport as you scroll.

  - `fixed`: Positions elements relative to the top left of the browser window. Similar to `absolute`, except the containing block is the whole viewport. These elements will remain in the same place in the viewport as you scroll.

  - `z-index`: Allows us to position elements on top of one another.

  - `display: none`: Allows us to hide specific elements from the view. Useful because it can activate and deactivate elements. (Compare with `visibility: hidden;`, which also hides elements but not the space they take up.)

- After the slides, open [03-Ins_Positioning](Activities/03-Ins_Positioning/index.html) within both a browser and editor.

  - Point out its default (`static`) positioning.

    ![posStaticPage.png](Images/posStaticPage.png)

  - Then, change the stylesheet being used to show the differences in positioning by commenting out the link for `static.css` and commenting in the `relative.css`.

  - Feel free to call on students to have them explain where the boxes will be located before you show the finished product.

  - Explain that boxes 1, 2, and 3 are moved relative to their original position.

  - Highlight that box three is moved using negative pixels. `bottom: -10px` makes the box move down 10 pixels while `bottom: 10px` moves the box up ten pixels.

    ![posRelCode.png](Images/posRelCode.png)

    ![posRelPage.png](Images/posRelPage.png)

  - `absolute` is worth spending a little bit more time on, as it arguably the most complex (and sets the tone for `fixed` positioning).

  - Remind students that absolute positioning is done relative to the nearest ancestor.  In this case, it means the `<div>` with the class `box-set`. Visually, it is the element with the gray background.

  - The CSS properties for box-1 move it down by 6% of the height of the outer div (gray box).

  - `box-2` is "glued" to the top of the box by using `top: 0` and moved forty pixels beyond the edge by using `right: -40`.

  - `box-3` is moved 40 pixels in from the right edge of the gray div and "glued" to the bottom.

  - `box-4` is not moved right or left but just glued to the bottom using `bottom:0`.

  - Should students how the boxes move upon changing the size of the browser window.

    ![posAbsCode.png](Images/posAbsCode.png)

    ![posAbsPage.png](Images/posAbsPage.png)

  - Unlink `absolute.css` and link `fixed.css`.

  - Fixed positioning is used to place objects in the browser window regardless of the size of the window.

  - Note for students that the settings are the same as for absolute but the positioning is not fixed.  For example, `box-4` used to be "stuck" to the bottom of the div it was in, but now it is stuck to the bottom of the page.

  - Explain that if this page had content that extended beyond the page, the box would still appear at the bottom of the browser window even when scrolling.

    ![posFixedPage.png](Images/posFixedPage.png)

  - Demonstrate the ordering of elements using `zindex.css`.  Quickly remind student that higher numbers are applied to the page last.  This makes them appear in front of elements with lower numbers.

    ![posZCode.png](Images/posZCode.png)

    ![posZPage.png](Images/posZPage.png)

  - Use `invisible.css` to show students the `display` and `visibility` properties.

    - `box-1` is set to `display: none;`.  This makes the rest of the page appear as if this element where not present at all.

    - `box-3` is set to `visibility: none` which makes it invisible but it still takes up space in the relative positioning.

    ![posInvisibleCode.png](Images/posInvisibleCode.png)

    ![posInvisiblePage.png](Images/posInvisiblePage.png)

- Answer whatever questions the class may have before moving onto the next activity.

### 7. Students Do: Positioning activity (Slides 28-30) (20 mins) (Critical)

- Students will be recreating a layout with a partner using CSS positioning rules.

  ![13-Positioning-Layout](Images/13-Positioning-Layout.png)

- **Files**

  - [position.html](Activities/04-Stu_Positioning/Unsolved/position.html)

  - [position.css](Activities/04-Stu_Positioning/Unsolved/position.css)

  - [layout.png](Activities/04-Stu_Positioning/Unsolved/layout.png)

### 8. Instructor Do: Positioning review (10 mins) (Critical)

- Open up the [solved version](Activities/04-Stu_Positioning/Solved/position.html) of the previous activity and walk through the code line-by-line with the class, answering whatever questions students may have.

- Point out the following in the HTML file:

  - Using a `<section>` to hold our content.

  - Using `<div>`s to hold the `fixed`, `relative`, and `absolute` content.

    ![stuPosHTML.png](Images/stuPosHTML.png)

- Point out the following in the CSS file:

  - `#fixed` element has a position of `fixed`.

    ![stuPosFixed.png](Images/stuPosFixed.png)

  - `#content` has a set `width`, and a `relative` position that moves it over to the right 250 pixels.

    ![stuPosContent.png](Images/stuPosContent.png)

  - `#relative` has the \`relative position value.  This allows the other div to be positioned absolutely inside of it.

    ![stuPosRelAbs.png](Images/stuPosRelAbs.png)

- Remind students that the best way to become comfortable with HTML and CSS is to practice, practice, practice.

- Suggest to students that they re-do exercises from this week at home, especially ones they found challenging the first time around.

### 9. Everyone Do: The Wonderful World of Bootstrap (10 mins) (Critical)

- In this activity, demonstrate the capabilities of Bootstrap while allowing students to think critically and discuss how bootstrap is working to render elements shown on a webpage.

- Open [05-Evr_WorldOfBootstrap/index.html](Activities/05-Evr_WorldOfBootstrap/Solved/index.html) in a browser.

  ![BootStrap-page](Images/BootstrapPage.png)

- Let students know that, based on what they have learned so far, they could build most of this page.

- Ask students what types of elements and styling might be required for this?

  - Student answers don't have to touch on every detail in the answers below but they should get the idea that building this page would be cumbersome.

  - Create a `<div>` or `<section>`.  Adjust the CSS to change the background color, make the the positioning absolute and set the top to 0px as well as the right, change the width to 100%.

  - Change the font on the page.

  - Inside of the `<div>` or `<section>` add two headers.  Use CSS to adjust the font size and position.

  - Insert a horizontal rule.

  - Add a paragraph element.

  - Add a button.  Adjust height, width, background color, color, text-align, and font-family.

- Now, slack out [05-Evr_WorldOfBootstrap/index.html](Activities/05-Evr_WorldOfBootstrap/Solved/index.html) and open it in VS Code.  Give students a minute or two to explore the code and speculate with those around them about how it is working.  If students are really lost, encourage them to visit the link under the Bootstrap CSS comment.

- After a minute or two, ask students to volunteer their hypotheses.

  - This HTML was linked with an external CSS file that is being hosted at the link provided.  The link is referred to as a CDN.  This file is providing all the styling for the elements on the page.  For example, in the CSS the "jumbotron" class has all the styling required to take care of background color, position, etc.  The same is true of the button.

  ![BootStrap-CDN](Images/BootstrapCDN.png)

  - If time allows, have students open the CDN link in a browser and use `Ctrl+F` or `Command+F` to search for `.jumbotron`.  Students do not have to understand all of the CSS listed there, but they can see that this CSS controls the jumbotron class.

  - Visit [Bootstrap Documentation](https://getbootstrap.com/) and click on "Get Started".  Show students that they can copy and paste the CSS CDN from there.  It is recommended that they use this CDN in their homework to remove inconsistencies on different browsers.

  - Let students know they can also download Bootstrap's CSS locally and use it in the exact same way they have been using other CSS files.

  - Point out that some bootstrap elements will require the CDNs listed under JS.  These CDNs allow interactive elements to be displayed correctly.

  ![BootStrap-DocsCDN](Images/BootstrapDocsCDN.png)

  - Click on "Components" in the left navigation menu, and then "Buttons".

  - Any one of the buttons shown can be added to a page by copy and pasting the HTML provided.  Additionally, the button color can be easily changed by changing the class on an existing button.

  ![BootStrap-Buttons](Images/BootstrapButtons.png)

  - In [05-Evr_WorldOfBootstrap/index.html](Activities/05-Evr_WorldOfBootstrap/Solved/index.html), change the button class of `btn-primary` to `btn-warning` and show students the result in the browser.

  ![BootStrap-Change](Images/BootstrapChange.png)

  - Let students know that next week they will be learning to make rapid prototypes using Bootstrap.

### 9. BREAK (40 mins)

### 10. Everyone Do:  Project 3 Kickoff (Slides 31-33) (60 mins)

- Use the slides to introduce Project 3 to the students.

- In project 3, students will improve on or create a webpage for a local cause.

- This is a different project approach than project 1 and 2. Announce to the students that project 3 will be more progressive. We are going to be working from week to week on there processes and to giving them more time. The research will be done as a group but final projects and presentations will be individual.

- Assign students to groups.

- Have students spend the remainder of the activity time working on the choosing an organization and developing a research plan.

- Let them know that they will be asked to present on the organization they chose, why they chose it, and what research they will be starting with at the end of class.

### 11. Students Do:  Present Project Proposal (20 mins)

- Have each group present their motivation for choosing their organization and well as what research they will be conducting.

### 12. Everyone Do: End Class (0 mins)

---

# LessonPlan & Slideshow Instructor Feedback

- Please click the link which best represents your overall feeling regarding today's class. It will link you to a form which allows you to submit additional (optional) feedback.

- [:heart_eyes: Great](https://www.surveygizmo.com/s3/4346059/UX-UI-Instructor-Feedback?section=16.3&lp_useful=great)

- [:grinning: Like](https://www.surveygizmo.com/s3/4346059/UX-UI-Instructor-Feedback?section=16.3&lp_useful=like)

- [:neutral_face: Neutral](https://www.surveygizmo.com/s3/4346059/UX-UI-Instructor-Feedback?section=16.3&lp_useful=neutral)

- [:confounded: Dislike](https://www.surveygizmo.com/s3/4346059/UX-UI-Instructor-Feedback?section=16.3&lp_useful=dislike)

- [:triumph: Not Great](https://www.surveygizmo.com/s3/4346059/UX-UI-Instructor-Feedback?section=16.3&lp_useful=not%great)

---

### Copyright

Trilogy Education Services © 2018. All Rights Reserved.
