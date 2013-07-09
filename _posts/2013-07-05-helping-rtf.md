---
layout: post
title: "How a Group of HN Users Rescued RestoreTheFourth.net"
category: posts
tweet: How a Taskforce of Designers and Developers Helped Rescue RestoreTheFourth.net

excerpt: The Rapid Response Internet Task Force's first assignment
---

Last week I wrote about the need for a ["Rapid Response Taskforce"](/task-force) that would build tools for online activism and throw up fast campaign sites in coordination with public advocacy and grass roots organizations. 

The post got some exposure on Hacker News, and over 70 designers, developers, copywriters, and general technologists have <a href="/rritf.html">signed up</a> to get involved.

When I wrote the post, I didn't expect that the team would need to jump into action just a day later.

### RestoreTheFourth.net Servers Go Down

I've been helping the folks behind <a href="http://www.restorethefourth.net">Restore the Fourth</a> with hosting costs, and at around mid-day on July 2nd the site went down. 

I reached out to Austin Riba, who's been leading their tech efforts, and checking server logs we noticed that the site had suddenly started receiving between six hundred and a thousand visitors a minute. Since the only analytics running on the site are New Relic, it wasn't immediately obvious whether this was a DDOS attack or real traffic.

A little bit of searching around and the source of the traffic quickly became apparent: Reddit had thrown up a blog post, pinned to the top of the homepage, with a link to RestoreTheFourth.net. We upped the number of dynos on Heroku to try and get things running again, and I sent out an email blast to the 40 or so people who had signed up at that point.

### The Taskforce in Action

The response was incredible: over 20 people, including a few sysadmins, jumped into a chat room to help out. 

We quickly decided to throw up Cloudflare to act as a CDN and help reduce load. Unfortunately our quick fix ended up being more difficult than we'd anticipated: RestoreTheFourth's hosting account had been locked by NameCheap. We lucked out: one of the members of the taskforce invited a Namecheap employee into the chat room, and within a couple of hours the site was redirected. We went on to add memcachier to speed up database lookups and HTML renders.

While the sysadmins amongst us fought fires and monitored the servers, a group of us started work on redesigning the website. After getting permission from the core Rt4 organizers to make changes, we quickly threw together a mockup for the homepage and event pages, and got to work implementing the new frontend code.

In less than 24 hours, we launched a new version of the Restore the Fourth site, and armed the servers to handle over 400,000 visitors over the course of 48 hours.

### The results: 

#### Homepage redesign:
<a href="/images/rt4-home-redesign.jpg" target="_blank"><img src="/images/rt4-home-redesign.jpg" alt="Restore the fourth homepage redesign" /></a>

#### Local event page redesign:
<a href="/images/rt4-event-redesign.jpg" target="_blank"><img src="/images/rt4-event-redesign.jpg" alt="Restore the fourth event page redesign" /></a>


### Awesome

This was an awesome trial run for the taskforce, and it was amazing to see folks rally around and make this happen. It's gotten me pretty excited for the sorts of things we can expect to come out of the team in the future.

Thanks to all the folks who rolled their sleeves up and got involved, particularly **Bob, Alex, Chris, Brady, Kriss, Eli, Beau, Sahar, Teddy, Michael, BC, Wyatt, Ameen, Cole, and Laurence**.

### Get involved

And if you care about these sorts of issues, <a href="/rritf.html">please sign up</a> and get involved. We need all the help we can get.



<br />