# 1.  What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

     1. getElementById() : You can call a id from html using this.

     2. getElementByClassName : You can call a class from html by this.

     3. querySelector : A mordern way to find the first element that matches CSS selector.

     4. querySelectorAll : just like querySelector, but it finds every elements that matches the description.


# 2. How do you create and insert a new element into the DOM?

  we can create and insert a new element following 3 steps.

    1. createElement() : Get a element to insert.
    2. innerText/classList : paint the element and weite on it.
    3. appendChild() : Snap the price into the page


# 3. What is Event Bubbling? And how does it work?

    Event Bubbling is when you click on an element that is inside another element, the "click" doesn't just happen to that one      tiny spot. It bubbles up to its perent, then to grandparent, all the way up to the very top of the wrbpage.

## It's work in 3 steps.

     1. The Target: You click the button, the buttons click event fires first.
     2. The Bubble: The event bubble up to the Box. The box was thinks it was cliked too.
     3. The Top: the event continues up to the Body of the page.


# 4. What is Event Delegation in JavaScript? Why is it useful?

     Event delegation is a clever way to handle events by using the Event Bubbling.

  Why is it usefull?
     Adding 1 lidtener is mouch cheaper for your computer memory then adding 100 or 10,000 listeners. This makes your website      run faster.


# 5. What is the difference between preventDefault() and stopPropagation() methods?

     preventDefault() : Stops the Brouser from doing its default johb.
     stopPropagation() : Stops the click from bubbling up. It tels the event: "stop here!Dont tell my parent boxes that I yas      clicked".
