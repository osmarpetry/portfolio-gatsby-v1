---
date: 2020-08-25 21:43:00
title: A Design Patterns summary
description: Design Patterns summary from the gang of four Desing Pattern book.
author: osmarpetry
image: /assets/img/design-pattern.png
---

In the place I work, I was developing new skills. One of these skills is about Design Patterns.

After creating this goal for me, was decided to make a presentation about some Design Patterns for my POD in Brazil and to the subsidiary on my city Joinville. But in the end, I created a presentation about all Design Patterns in the book of the gang of four.

In this publication, I will write what I used to help me in the presentation, will not be code. For that, I think is better you go to [https://refactoring.guru/](https://refactoring.guru/pt-br/design-patterns/visitor), where you can have a unique example of the pattern in your favorite language.

### First things firsts

The idea you know differents design patterns, in my opinion, is to you have a commonplace for everyone to write in the same pattern between different projects. Will be easier in the future to other new developers in the project to fully understand the code pattern that your team is using. I don't mean those patterns are the best, maybe a unique design pattern to your project would be better, but your team should have good documentation with example and covering corner cases in your unique design pattern.

### Different purposes and scopes of design patterns

In the following image that you can have from the book or the gang of for, you can see three purposes device by two scopes (class and object).

![Publicac%CC%A7a%CC%83o%20e5b83de61bda4a10933e861d838bc368/pasted_image_0.png](Publicac%CC%A7a%CC%83o%20e5b83de61bda4a10933e861d838bc368/pasted_image_0.png)

The difference between the scope class and object will be visible on the factory pattern. Where Factory Pattern you just create one custom function in the class (class scope) and in the Abstract Factory, you create a fully custom object (object scope).

The porpuses difference is the pattern will change the way your code is created, is structured or behave. You can check better the difference between structural and behavioral with Decorator and Chain of Responsibility. Where on Decorator one Decorator doesn't depend on the other Decorator not chacing the behave of your code, but on Chain Responsibility, if some chain is braked the rest your code will not be executed, changing the **behavior** of your code.

I tried to a little deep over every pattern, but this will take too much time and will not be so complete as the [https://rafatiring.guru.com](https://www.notion.so/Publica-o-c0ee04641360459a9725cd8fce7cdf3b#13dc808b3e34418e819a05ef8f400c56) already has, with images, diagrams, and code examples in different languages.

---

## My apresentation about this subject

You can check the presentation in Portuguese above this text, but if you don't speak Portuguese it's not a problem, I did a smaller summary about every pattern. But remember, this was a beginner presentation about a lot of patterns, I didn't go deep of every pattern with multiple examples, if you already have the expertise to understand the content bellow, you should try reading the book "Design Patterns: Elements of Reusable Object-Oriented Software" or check out the website: [https://www.notion.so/Publica-o-c0ee04641360459a9725cd8fce7cdf3b#4eb58b8133564297b8d718e62ee5b451](https://www.notion.so/Publica-o-c0ee04641360459a9725cd8fce7cdf3b#4eb58b8133564297b8d718e62ee5b451) where you can go deep by yourself, would be better over I gave a deep exaplanation of every pattern with multiple code examples, with diagrams when necessery.

<iframe
  width="100%"
  height="315"
  src="https://www.youtube.com/embed/Gbb8MxTDhWA"
  frameborder="0
  "allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
></iframe>


### Creational

#### Factory method

You will use this pattern when you want to have a function in your class that can have very different behavior depends on your input. So you will create a Factory method to this function, that will expect the same input and will return the same output. You will just choose between two factories like will be the factory that returns a car trip or a bike trip?

#### Abstract factory

Similar to the Factory method, but the difference that you will do the factory to the entire object. The biggest problem is when you change something in your Factory interface, like incrementing a new method you should create a new method for every place that implements this factory. The same happens if you delete a method. Is hard the maintain the pattern after ages.

#### Builder

This is one of my favorite patterns because is similar to the Template Method. Are common two ways to use this pattern:

- Director: will return an object with exactly you already want, without need to thinks is the methods are called the right order per example: You have various steps to create a house like build a wall, build the roof, then build the garden
- By your own: Is when you create your own director, the builder should allow you to call the internal function of an object without the necessity of a director. Per example, you want for some reason create the garden before the walls of your house, you should be allowed to do it, but take care the orders are you calling the function because the idea of the Builder pattern is to isolate the complexity of call the methods in the right order.

#### Prototype

This is very simple, for me is not necessary if you have a pure class that will always return the exact same object if you use the same parameters.

But is necessary when this is not possible, per example you have a `new Date()` inside your object as private value. So you create a function called `clone()` that you return the instance of his own with **this** values on constructures, **this** value you don't know because they are private.

#### Singleton

You use this pattern when you want to make sure anywhere in the project will have two instances of your object, that you're implementing the Singleton pattern. When someone else tries to create a second instance of the object the Singleton will return the already created instance, in the scenario is similar to the Flyweght pattern.

### Structural

#### Adapter

Adapter pattern as the own name means is to you adapter some part of your system. Per example, you will have an Adapter method that will call the old methods that return XML for then return you the JSON object you expect in the new part of the project.

#### Bridge

Is used when you want to connect two objects that are intrinsically connected to each other, per example a device and a controller. For make use of this pattern, you will create a Device interface to implement your devices and to be expected in the controller constructor, for the controller able to know every public method of Device to implement.

intrinsically

#### Composite

When you have an object, that has another object you have a Composite pattern. This pattern is commonly seen with the Flyweight pattern.

#### Decorator

Is very common to see his on Java frameworks like Spring Boot or Javascript framework like Angular, both scenarios make use of annotation on the top of the class but are not mandatory.

You use this pattern to attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

#### Facade

Is common to use this pattern when you want to have a facade of differents methods an external library. Per example, you have a library that has the codecs to all video types, but instead of every time you want to decode a video you choose between every method of this library, you just pass the video do the Facade of this library, that will return you a decoded video, free of the responsibility of choose the right method.

#### Flyweight

Similar to Singleton, is commonly used when you want to west less infrastructure power of your application. Per example, you have a Composite of a cube, that has six squares, every square has two triangles and every triangle has three dots. Instead of every cube has 6 squares instances, 12 triangles instances and 36 dots instances you just have one instance of each of these, just will have one instance of each that you will reuse by the Flyweight pattern.

#### Proxy

At the first time, I saw this pattern I thought was like Facade, but is not. You will use this pattern when want to check if can or cannot access an object, work the same of the proxy in your local network. A good example in my opnion is when you created a very good service to get video but is not making use of cache but is hard to implment this directy in the code, so you will create a Proxy to check if you have this vide on cache, if not then the Proxy will allow to make a new request to the backend.

#### Interpreter

As the name same, if to interpreter something, that somethins is a string. Per example a date object will be Interpreter to a especic date time mask.

#### Template method

Works similar to Builder, but you can't chose just some methods or order the call order of methods. A Template Methods can order you to implement just a specic method and can allow you to create a hook method if you want, but not mandatory like the previous.

#### Chain of responsabilty

Is commonly used to you waste less time executing something that needs follow specic steps, if some of this steps fails it should break the chain. Per example a credict card application should make use of this pattern, if some requiered step fails it should not follow to the next step, it will prevent you to do not authorized action like aprove a payment without limit on you card.

#### Command

Is common use to implement in remote control, where you just have execute method with the complex action want. Also can be created a undo method, to undo what the previous time you called executed method did.

#### Iterator

You will make use of it when you create a Data Structure algorithm, where you reduce the complexity like the Command to some command like the next() method, that will do the algorithm and gave you the next item of the list following your algorithm.

#### Mediator

Is the worse pattern, because this pattern you able you to the Mediator return anything, this is a problem because you easily have a God Object that knows everything in your application. You can use others pattern to work around the problem Mediator solves.

#### Memento

Is the more expansive to the machine, because a Memento will take snapshots os your object that is very good to have work a backup but is very expansive, beucase you should have this in memory. A work around, is after trhee snapshopts save on swap memory instead of ram memory.

It`s very good pattern to save the history, I also recomend you to save the object with the date you toked the snapshopt to debug porpuses.

#### Observer

It's my favorite pattern, without the Observer you should always be asking the provider about something new, or the provider always sends the news when something comes news, both very expansive and not in real-time. Observer pattern will make this provider an Observable with the list os observer that want to receive the news when something new comes, also will have two methods in the observable one to increment a new observer to the list and another method to remove the observer.

#### State

The state will able you to have the same object with different returns depends on the state. Per example, you have a Shop system where can have after you bought the product: review the product and cancel the purchase.

If the **state** is "waiting for confirmation of the purchase": when you call review the product's method, should return to you: "You didn't receive the product, you can't review it'. And you try to cancel: "Purchase canceled, you be refunded in the next 24 hours".
But if the **state** is: "shipping" the review the product's method should return the same, but the cancel the order should return to you "You can denied the delivery and will refund after the product arrives here, or after receive the product just ship again to us and you will be refunded".
But if the **state** is "delivered, on the 30 days period", you will be able to review the product and then try to cancel will get this return "You did the purchase in the last 30 days! Just ship again to us, no fine will be charged"


#### Feedback about this summary

If you found something wrong, or want to help my explanation send me a e-mail to mailto:osmarpetry@gmail.com