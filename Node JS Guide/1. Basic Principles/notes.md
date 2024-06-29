<h1>1. Basic Principles</h1>

<h4>1.1 The story of Node.js</h4>

<h6>1.1.1 Origins</h6>

<h6>1.1.2 Birth of Node.js</h6>

<h6>1.1.3 Breakthrough of Node.js</h6>

<h6>1.1.4 Node.js Conquers Windows</h6>

<h6>1.1.5 io.js: The fork of Node.js</h6>

In 2014 the communiny was unhappy with how things were running and that led to `io.js` developed separately from the original platform.

<h6>1.1.6 Node.js reunited</h6>

In 2015, the two projects io.js and Node.js were merged into the Node.js Foundation.

<h6>1.1.7 Deno: A new start in the JS Sky</h6>

Deno is based on TypeScript by default and adds a fundamentally different module system.

<h6>1.1.8 OpenJS Foundation</h6>

In 2019, the JS Fonundation and the Node.js Foundation merged to form the OpenJS Foundation.

<h4>1.2 Organization of Node.js</h4>

There is a committe of several people who steer the development of the platform.

<h6>1.2.1 Technical Steering Committee</h6>

The technical steering committee (TSC) is responsible for further developing the platform.

<h6>1.2.2 Collaborators</h6>

Collaborators are designated by the TSC.
Typical tasks of a collaborator include supporting users and new collaborators, improving Node.js source code and documentation, reviewing pull rquests and issues, participating in working groups and merging pull requests.

<h6>1.2.3 Community Committee</h6>

As the name implies, the Community Committee (CommComm) takes care of the Node.js community with a special focus on education and culture.

<h6>1.2.4 Work Groups</h6>

The TSC establishes various work groups to have specific topics addressed separately by experts.
Examples of such work groups include the following:

- Release - This work group manages the release process of the Node.js platform, defining the content of the releases and taking care of LTS.
- Streams - The streams work group is working to improve the patform's Stream API
- Docker - The work group manages the official Docker images of the Node.js platform and ensures that they are kept up to date.

<h6>1.2.5 OpenJS Foundation</h6>

<h4>1.3 Versioning of Node.js</h4>

<h6>1.3.1 Long-Term Support Release</h6>

A Node.js version with an even version number is trasitioned to an LTS release as soon as the next odd version is released.

<h4>1.4 Benefits of Node.js</h4>

<h4>1.5 Areas of use for Node.js</h4>

- Pure JavaScript - When working with Node.js you don't have to learn a new language dialect because you can fall back on the JS langiage core.
- Optimazized engine - Node.js is based on google's V8 engine.
- NonBlovking I/O - All operatons that don't take place directly in Node.js don't block the execution of your application.
- Single threaded - A typical Node.js application runs in a single process.

<h4>1.6 The core V8 Engine</h4>

<h6>1.6.1 Memory model</h6>

<h6>1.6.2 Accessing properties</h6>

As you probably know JS doesn't know classes, the object model in JS is based on prototypes.