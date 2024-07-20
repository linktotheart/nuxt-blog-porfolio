<template>
  <div
    class="sb-component sb-component-section sb-component-contact-section colors-f flex flex-col justify-center min-h-0 mt-0 mb-0 ml-0 mr-0 pt-24 pb-24 pr-4 pl-4"
  >
    <div class="flex w-full justify-center">
      <div class="relative w-full max-w-5xl">
        <div
          class="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-8"
        >
          <div class="flex-1 w-full">
            <h2 class="text-left">
              Got an interesting project? Tell me more...💬
            </h2>
            <div class="sb-contact-section-form mt-12">
              <form
                class="sb-component sb-component-block sb-component-form-block inline-block w-full"
                name="sign-up-form"
                id="sign-up-form"
              >
                <div class="grid sm:grid-cols-2 sm:gap-x-4">
                  <input type="hidden" name="form-name" value="sign-up-form" />
                  <div class="sb-form-control">
                    <label
                      id="firstName-label"
                      class="sb-label sr-only"
                      for="firstName"
                      >First Name</label
                    ><input
                      id="firstName"
                      class="sb-input"
                      type="text"
                      name="firstName"
                      aria-labelledby="firstName-label"
                      required=""
                      placeholder="First Name"
                    />
                  </div>
                  <div class="sb-form-control">
                    <label
                      id="lastName-label"
                      class="sb-label sr-only"
                      for="lastName"
                      >Last Name</label
                    ><input
                      id="lastName"
                      class="sb-input"
                      type="text"
                      name="lastName"
                      aria-labelledby="lastName-label"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="sb-form-control">
                    <label id="email-label" class="sb-label sr-only" for="email"
                      >Email</label
                    ><input
                      id="email"
                      class="sb-input"
                      type="email"
                      name="email"
                      aria-labelledby="email-label"
                      required=""
                      placeholder="Email"
                    />
                  </div>
                  <div class="sb-form-control">
                    <label
                      id="address-label"
                      class="sb-label sr-only"
                      for="address"
                      >Address</label
                    ><input
                      id="address"
                      class="sb-input"
                      type="text"
                      name="address"
                      aria-labelledby="address-label"
                      required=""
                      placeholder="Address"
                    />
                  </div>
                  <div
                    class="sb-form-control flex items-center sb-form-control-full"
                  >
                    <input
                      id="updatesConsent"
                      class="sb-checkbox"
                      type="checkbox"
                      name="updatesConsent"
                      aria-labelledby="updatesConsent-label"
                    /><label
                      id="updatesConsent-label"
                      class="sb-label"
                      for="updatesConsent"
                      >Sign me up to recieve updates</label
                    >
                  </div>
                </div>
                <div class="mt-4 text-center">
                  <button
                    type="submit"
                    class="sb-component sb-component-block sb-component-button sb-component-button-primary"
                  >
                    Submit 🚀
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
