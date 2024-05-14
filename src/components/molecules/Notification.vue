<script setup lang="ts">
import { AlertCircle } from 'lucide-vue-next';
import { Alert, AlertDescription, AlertTitle, AlertVariants } from '@/components/ui/alert';

const props = defineProps<{
  title: string;
  isVisible: boolean;
  description: string;
  variant?: AlertVariants['variant'];
}>();

const isErrorAlert = props.variant === 'destructive';
</script>

<template>
  <Alert :variant="variant">
    <AlertCircle v-if="isErrorAlert" />
    <AlertTitle>
      {{ title }}
    </AlertTitle>
    <AlertDescription>
      {{ description }}
    </AlertDescription>
  </Alert>
</template>

<style scoped lang="scss">

</style>