export const DefaultAlertCode = {
  "AlertComponent.Vue": `  
  <script setup>
import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertLink,
  AlertTitle,
} from "keep-vue";
</script>
<template>
  <Alert>
    <AlertContainer>
      <AlertIcon />
      <AlertTitle>Primary Alert</AlertTitle>
      <AlertDescription>
        A short description followed by two actions items.
      </AlertDescription>
    </AlertContainer>
    <AlertContainer>
      <AlertLink href="/">Learn More</AlertLink>
      <AlertDismiss />
    </AlertContainer>
  </Alert>
</template>
  `,
};

export const AlertColorVariantCode = {
  "AlertComponent.Vue": `  
  <script setup>
import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertLink,
  AlertTitle,
} from "keep-vue";
</script>

<template>
  <div class="space-y-5">
    <Alert color="primary">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Primary Alert</AlertTitle>
        <AlertDescription>
          A Short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>
    <Alert color="secondary">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Secondary Alert</AlertTitle>
        <AlertDescription>
          A short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>

    <Alert color="success">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>
          A short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>

    <Alert color="warning">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>
          A short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>

    <Alert color="error">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Error Alert</AlertTitle>
        <AlertDescription>
          A short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>
  </div>
</template>
  `,
};

export const AlertWithBgColorCode = {
  "AlertComponent.Vue": `  
  <script setup>
import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertLink,
  AlertTitle,
} from "keep-vue";
</script>

<template>
  <div class="space-y-5">
    <Alert :with-bg="true" color="primary">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Primary Alert</AlertTitle>
        <AlertDescription>
          A short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>
    <Alert withBg color="secondary">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Secondary Alert</AlertTitle>
        <AlertDescription>
          A short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>
    <Alert :with-bg="true" color="success">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Success Alert</AlertTitle>
        <AlertDescription>
          A short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>
    <Alert :with-bg="true" color="warning">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Warning Alert</AlertTitle>
        <AlertDescription>
          A short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>
    <Alert :with-bg="true" color="error">
      <AlertContainer>
        <AlertIcon />
        <AlertTitle>Error Alert</AlertTitle>
        <AlertDescription>
          A short description followed by two actions items.
        </AlertDescription>
      </AlertContainer>
      <AlertContainer>
        <AlertLink href="/">Learn More</AlertLink>
        <AlertDismiss />
      </AlertContainer>
    </Alert>
  </div>
</template>

  `,
};

export const AlertWithDismissIconCode = {
  "AlertComponent.Vue": `  
 <script setup lang="ts">
import {ref} from "vue";
import {
  Alert,
  AlertContainer,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertLink,
  AlertTitle,
} from "keep-vue";

const showAlert = ref(false);
const onDismiss = () => {
  showAlert.value = true;
};
</script>

<template>
  <Alert :dismiss="showAlert">
    <AlertContainer>
      <AlertIcon />
      <AlertTitle>Alert here</AlertTitle>
      <AlertDescription>
        A short description followed by two actions items.
      </AlertDescription>
    </AlertContainer>
    <AlertContainer>
      <AlertLink href="/">Learn More</AlertLink>
      <AlertDismiss @dismiss="onDismiss" />
    </AlertContainer>
  </Alert>
</template>


  `,
};
