<template>
  <section class="final-cta section-padding">
    <div class="container">
      <div class="cta-card reveal bg-[url('/images/cross.png')] bg-cover bg-center">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Build Loyalty That Lasts?</h2>
          <p class="cta-description">See how the platform fits your branches, menu, and customers</p>
          <a href="#pricing" class="btn btn-white btn-lg">See Pricing</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.final-cta {
  padding: 80px 0;
}

.cta-card {
  background-color: var(--color-primary);
  border-radius: 24px;
  height: 390px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.pattern-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1280px;
  height: 397px;
  opacity: 0.1;
  pointer-events: none;
}

.pattern-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.cta-content {
  position: relative;
  z-index: 2;
  color: white;
  max-width: 1120px;
}

.cta-title {
  font-size: 48px;
  margin-bottom: 24px;
  background: linear-gradient(180deg, #FFFFFF 31.36%, rgba(255, 255, 255, 0.5) 183.4%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.96px;
}

.cta-description {
  font-size: 18px;
  color: #edf7fd;
  margin-bottom: 48px;
}
</style>
