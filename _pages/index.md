---
layout: home
permalink: /
profile_picture:
  src: /assets/img/profile-pic.jpg
  alt: website picture
---

<div class="profile-section" style="float: right; text-align: center; margin-left: 30px; margin-bottom: 20px;">
  <img src="/assets/img/profile-pic.jpg" alt="website picture" class="profile-pic" style="float: none; margin-left: 0;" />
  <!-- Social & Contact Links -->
  <div class="contact-links">
    <a href="javascript:void(0)" onclick="copyEmail()" title="Email" style="position: relative;">
      <i class="fas fa-envelope"></i>
      <span id="copy-tooltip" style="display: none; position: absolute; top: -30px; left: 50%; transform: translateX(-50%); background: #333; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 12px; white-space: nowrap;">Copied!</span>
    </a>
    <a href="/curriculum-vitae" target="_blank" title="View CV">
        CV
    </a>
    <a href="https://scholar.google.com/citations?user=5P0SThgAAAAJ" target="_blank" title="Google Scholar">
      <i class="ai ai-google-scholar"></i>
    </a>
    <a href="https://www.linkedin.com/in/jeongin-park-737671410/" target="_blank" title="LinkedIn">
      <i class="fab fa-linkedin"></i>
    </a>
  </div>
</div>

<div style="display: flex; flex-direction: column;">
  <h1 class="home-description">Jeongin Park</h1>
  <p class="home-subtitle">Master's Student, Seoul National University</p>
</div>

<div style="height: 0.5em;"></div>

I am interested in Human-AI interaction in extended reality (XR) that augments people's abilities in everyday activities, situated in the 3D physical world.


I am currently a Master’s student in the [HCI Lab](http://hcil.snu.ac.kr/) at Seoul National University (SNU), advised by [Prof. Jinwook Seo](https://hcil.snu.ac.kr/people/jinwook-seo). I received my B.S. in Computer Science and Engineering and Mathematical Sciences from Seoul National University, fully funded by the Presidential Science Scholarship.

From January to July 2026, I was a visiting intern at the [Augmented Perception Lab](https://augmented-perception.org/) at Carnegie Mellon University, collaborating with [Prof. David Lindlbauer](https://www.davidlindlbauer.com). I also have research and industry experience at [Lunit Inc.](https://www.lunit.io/) and the [Max Planck Institute](https://www.mpcdf.mpg.de/).

My previous work lies at the intersection of Visualization, Human-AI interaction, and wearable interactions and XR.
<div style="text-align: center;">
  <img src="/assets/img/PrevWork.png" alt="Research Overview" style="max-width: 700px; width: 100%;" />
</div>

<br>

<div id="publications" class="home-section">
<h2 class="section">Publications</h2>
{% include publications.html %}
</div>


<div id="education" class="home-section">
<h2 class="section">Education</h2>
{% include education.html %}
</div>

<div id="experience" class="home-section">
<h2 class="section">Research Experience</h2>
{% include experience.html %}
</div>
<!-- <div id="projects" class="home-section">
<h2 class="section">Projects</h2>
{% include project.html %}
</div> -->

<br>

<script>
function copyEmail() {
  navigator.clipboard.writeText('parkjeong02@gmail.com').then(function() {
    var tooltip = document.getElementById('copy-tooltip');
    tooltip.style.display = 'block';
    setTimeout(function() {
      tooltip.style.display = 'none';
    }, 1500);
  });
}
</script>
