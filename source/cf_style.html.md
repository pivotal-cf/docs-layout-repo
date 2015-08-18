---
title: Cloud Foundry Documentation Standards
---

This guide presents documentation standards for the CF Documentation team. In general, use your best judgement when applying these rules, or when resolving situations not covered here.

If you find that you have standards questions that aren't yet addressed, add a chore to the CF Documentation private backlog to request an update, or submit a pull request to update the guide yourself.

##<a id='basics'>Style Basics</a>##

The guidelines in this section serve as basic principles for writing helpful documentation.

###<a id='empathy'>Empathize with the Reader</a>###

Our readers typically only look for information when they are already frustrated.
They tried to do something, it didn’t work, and now they need help.

To serve them well, the documentation needs to:

* Use clear, easy to understand language.
* Provide examples.
* Make it easy for the user to find information. Group related topics together. Provide links to other parts of the documentation where appropriate. Use headers to make the docs skimmable.

###<a id='audience'>Audience and Voice</a>###

Strive to write clearly and concisely.

* Determine the audience for a topic before you begin writing, including the reader's familiarity with the topic and with specific terms.
* Avoid long or complicated sentences. Try to limit sentences to one thought.
* Avoid idiomatic phrasing. Idioms can be confusing for non-native English speakers.
* Write in active voice.

	“The logging feature collects STDERR and STDOUT” instead of “STDERR and STDOUT are collected.”
* Remember that not all readers will be native English speakers, so prefer simple words over their ornate cousins.
* Write directly to the reader. Use “you.”

	For example:

	If you have a `manifest.yml` file in your current working directory, `APP_NAME` defaults to the name of the application in the 		manifest.
* Avoid using language that a reader could perceive as condescending. For example, avoid using the terms “simple” or “easy” when 	describing a procedure.

###<a id='contexts'>Consider Multiple Contexts</a>###

Cloud Foundry exists in three contexts:

- **OSS**: Cloud Foundry and BOSH are open source.
- **PCF**: The commercial packaged offering is called Pivotal Cloud Foundry.
- **PWS**: Pivotal Web Services is our commercial hosted offering.

Much of our documentation needs to work for multiple contexts.

As you are writing, check what the prose looks like when published in all the contexts that it serves.
Something that makes complete sense in one context (e.g. “target api.run.pivotal.io”) would make no sense in another context.

##<a id='text_format'>Text Formatting Conventions</a>##

<table border="1">
<tr>
  <td><strong>bold</strong></td>
  <td>	Bold the names of UI elements when you instruct the user to interact with them. For example:

	</br>"In the <strong>Settings</strong> pane, click <strong>Save</strong>."</br></br>

	Also bold run-in headings, unless the headings call for a different format. For example:

	<ul>
	  <li><strong>OSS</strong>: Cloud Foundry and BOSH are open source.</li>
	  <li><strong>PCF</strong>: The commercial packaged offering is called Pivotal Cloud Foundry. </li>
	</ul>
  </td>
</tr>
<tr>
  <td><em>italic</em></td>
  <td>Use italics sparingly to introduce key concepts or refer to another topic or manual when that reference is not linked. Also use italics when referring to a word as a word, rather than as a functional part of the sentence.</td>
</tr>
<tr>
  <td>Note</td><td>Notes alert the reader to important, advisory, or surprising information.</br>
	</br>If you add a note that applies to a specific step in a procedure, align the note with the step. Confirm that list numbering continues after the note.</br>
	</br>If the note applies to the whole procedure, align it with the regular body paragraphs.</td>
</tr>
<tr>
  <td>plain</td><td>Keyboard key names are plain text, not monospaced. For example, "Press Enter."</br>
	</br>Use plain text to refer to a value that you are not instructing the user to enter or click.</td>
</tr>
<tr>
  <td><strong>></strong></td><td>This symbol leads you through nested menu items or dialog box options to a final action. For example:</br>
	</br>Refer to <strong>Elastic Runtime>Credentials</strong> for the UAA admin name and password.</td>
</tr>
<tr>
  <td><code>code</code></td><td>Use code formatting for sections of code, programming examples, filenames, and path names. Also use code formatting to indicate text that the user enters. </td>
</tr>
<tr>
  <td>Terminal block</td><td>Use terminal formatting for commands that the user enters in the terminal.</td>
</tr>
<tr>
  <td>Placeholder text</td><td>Placeholder text, indicating that users should supply their own values, should be in all caps. For example:</br>
	<code>cf create-user USERNAME PASSWORD</code></br></br>
      If the placeholder text contains multiple words, separate the words with hyphens. For example:</br>
        <code>https://console.YOUR-SYSTEM-DOMAIN</code>
  </td>
</tr>
<tr>
  <td>Dot file extensions, such as <code>.html</code></td><td>Always use the article <em>a</em>, not <em>an</em>, to precede a reference to a file extension. Use all caps instead of the file extension when it is used as an acronym or when referring to the file format. </td>
</tr>
</table>

##<a id='grammar'>Grammar</a>##

###Indefinite Articles with Abbreviations###

When an abbreviation follows an indefinite article, the choice of _a_ or _an_ is determined by the way the abbreviation reads out loud.

###Modifiers###

Place a modifier as close as possible to the word or phrase it modifies. Misplaced modifiers confuse the reader and obfuscate the meaning of the sentence.

###Personification###

Avoid personifying inanimate objects by giving them possession or by using words that imply agency.

###Prepositional Phrases###

Too many prepositional phrases can make your writing difficult to read. You can rewrite most sentences containing multiple prepositional phrases to make them more clear.

###Tense###

Avoid the future tense. In most cases, you can rewrite to use the present tense.

###Which vs That###

_That_ and _which_ are not interchangeable. _That_ identifies something as essential, or a restrictive clause. _Which_ is used when something is auxiliary or nonessential, and introduces a nonrestrictive clause. Generally, if you can drop the clause and still make sense of the sentence, use _which_. _Which_ always takes a comma.

##<a id='punctuation'>Punctuation</a>##

* Use a single space between sentences, rather than two spaces.

* Always use the Oxford comma.

* Avoid using contractions, unless you are using unusually friendly language in a special circumstance.

* Always place punctuation that indicates a pause or a stop inside quotation marks.

* Parentheses in text should be used only to introduce acronyms.

##<a id='diction'>Word Choice</a>##

Less is more. If you can make your point with fewer words, do so (within reason, of course).

###Allow and Enable###

Avoid using weak verbs such as _allow_ and _enable_. Even if the sentence is written in active voice, these verbs connote receiving an action, not performing it.

###Buttons###

When referring to command buttons, don’t refer to them as command buttons. For example:

Click **Save**.

###Checkboxes###

Include both the checkbox name and the word _checkbox_ in each reference. Avoid the phrase _check the checkbox_; it is ambiguous. Instead, use _select/clear_ or _enable/disable_. Be consistent within a single topic. For example:

Select the **Disable Custom Buildpacks** checkbox.

###Clicking###

Use _click_, never _click on_. For example:

Click **Save**.

###Demonstrative Pronouns###

Do not use demonstrative pronouns, such as _this_ or _that_, as nouns. Doing so obscures the pronoun antecedent. Reword to avoid and to be more specific. For example:

_This software_ leads the market.

###Filename###

Use _filename_, not _file name_.

###Headings###

In general, avoid gerunds in headings, and use the imperative instead. For example:

Create New User Accounts

###Information About###

Use _information about_, not _information on_.

###Log In###

_Login_ is used as an adjective; _log in_ is the correct verb form.

###Note###

Use _note_ only to introduce a formatted Note section. Otherwise, use _notice_, or reword to avoid.

###Select vs Choose###

Use _choose_ when instructing the reader to make a single choice from among multiple options, and when you are not asking the reader to interact with a UI element.

Use _select_ when referring to a tab in a tabbed dialog. In general, also _select_ rather than _click_ when the UI element in question remains displayed after the user clicks it. For example:

Select **Assign Networks**. Elastic Runtime runs on the network you select. _[**Assign Networks** highlights and continues to display on the left, along with the names of the other configuration pages.]_

###Titles###

Use gerunds in titles where possible. For example:

_Getting Started with Pivotal Cloud Foundry_

###Topics vs Pages###

Refer to our help documents as _topics_, not _pages_ or _articles_.

###Want###

When necessary, use _want_. Do not use _wish_ or _desire_.

###(Front|Back)(end| end|-end)

Use two words, i.e. "front end", not "frontend" or "front-end".

##<a id='formatting'>Layout Conventions</a>##


###<a id='bullets'>Bulleted Lists</a>###

If you have a sentence with many modifiers, consider breaking it into list format for clarity.

Bulleted lists should have parallel construction. Always capitalize the first item. Use punctuation at the end of the line only if the bulleted items are complete sentences and/or contain multiple sentences. If the items are words or phrases, do not add trailing punctuation. Example:

* Use bullets where appropriate.
* Capitalize the first item.
* Don’t add punctuation to phrases.
* Bulleted lists add clarity. Use them.

In general, bulleted lists should not nest. (This is a guideline, not a rule. However, if you are nesting bullets, there’s probably another way to structure the information that will be more readable. Consider using section headers for the top level.)

In general, avoid starting a section with a bulleted list. Write a sentence or two to introduce it. However, where you judge the context to be sufficiently clear, it might be better to lead with a bulleted list than to include useless sentences as filler.

Try not to end a section with a bulleted list (though as above, use your best judgement to avoid useless filler). Write a sentence or two as a conclusion.

###<a id='images'>Images</a>###

Include a one pixel black border around images that lack a natural border.

To annotate an image, use numbered callouts rather than labels.
Use red circles or squares when necessary to call attention to a portion of an image, but use sparingly. In most cases, the callout is unnecessary, or the image could be cropped further as an alternative. Do not use arrows.

In general, if you use an image, you should refer to it in the text to explain why it appears and what it depicts.

###<a id='procedures'>Procedures</a>###

We have three styles. Use what works for the specific procedure. Try to use the same style throughout a topic.

####Standard Procedure####

Standard numbered list with ending action as last item.

  Example:

  1. Select **AWS Config**.
  1. Do this.
  1. Do that.
  1. Do the other thing.
  1. Click **Save**.

####Compact Procedure####

Comprehensive instruction in a step with the ending action; might include a bullet list of fields underneath.

  Examples:

  1. Select “TCP” in **Ping Protocol** on the **Configure Health Check** page and ensure that the **Ping Port** value is “80.” Click **Continue**.

or

  1. Select **Create THING** on the **SOME_NAME** page, enter the following information, and click **Continue**:
	- **FIELD**: Enter “VALUE”.
	- **FIELD**: Enter “VALUE”.
	- **FIELD**: Enter “VALUE”.

####Alternate Compact Procedure####

Comprehensive instruction in a step with bullet list of fields underneath, and final bullet is the ending action for that page (such as **Save**, **Next Step**, **Create THING**, etc.).

  Example:

  1. Specify the following details for your VPC:
	- **IP CIDR block**: Enter “10.0.0/16”.
	- Enter a **VPC Name**.
	- Set both **Availability Zone** fields to an available “us-east-1” region value. You can set the subnets to the same AZ or set a different AZ for each subnet.
	- Click **Create VPC**.

###<a id='references'>References</a>###

When referring readers to another topic or section, link text that describes what they should expect to find at the reference. The text does not necessarily need to be the complete title of the topic, though that is often helpful.

##<a id='products'>Product Naming Conventions</a>##

On first reference in a topic, link the product name to the relevant product page. Including these links improves SEO.

###cf Command Line Interface Tool###

Refers to the downloadable command line tool. On first reference in a topic, use the full name, _cf Command Line Interface tool_. On subsequent references, use _cf CLI_.

###Developer Console (OBSOLETE)###

See _Apps Manager_.

###Pivotal Cloud Foundry Apps Manager###

Refers to the web-based console application for managing users, organizations, spaces, and applications. This term replaces the obsolete _Dev Console_. Use the full name on first reference. After the first reference in a topic, use the short version _Apps Manager_. Also use the short version for titles and headings.

###Pivotal Cloud Foundry Elastic Runtime###

The on-premises, commercial, enterprise distribution of Cloud Foundry. On first reference, use full name. On subsequent references, use _Elastic Runtime_.

###Installation Dashboard###

The _Installation Dashboard_ is a UI element in Ops Manager. It displays product tiles for each installed product in your PaaS.

###Pivotal CF (OBSOLETE)###

Replace with _Pivotal Cloud Foundry_.

###Pivotal Cloud Foundry###

Encompasses Ops Manager and Elastic Runtime. It is also acceptable to use the acronym _PCF_ when brevity is required, such as in titles and headings.

###Pivotal One (OBSOLETE)###

This term is deprecated. Do not use it.

###Pivotal Cloud Foundry Operations Manager###

_Pivotal Cloud Foundry Operations Manager_ is a web application that you use to deploy and manage a Pivotal Cloud Foundry PaaS. Use the full name on first reference. After the first reference in a topic, use the short version _Ops Manager_. Also use the short version for titles and headings.

###Product Tiles###

Use the term _product tiles_ to refer specifically to the UI pills or squares on the Ops Manager Installation Dashboard. Use _products_ otherwise, in the more general sense. In other words, a _tile_ refers specifically to the UI object that you click. For example:

The Installation Dashboard displays product tiles for each installed product in your PaaS.

##<a id='resources'>Resources</a>##

* Refer to the _Chicago Manual of Style_ as the arbiter of basic grammar questions.
* For guidelines on clarity and brevity, read Strunk and White’s _Elements of Style_.

