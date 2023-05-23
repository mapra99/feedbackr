import { Button, LinkButton } from '@/components/button'

export default function Ui() {
  return (
    <section className="p-5">
      <h1 className="text-3xl font-sans text-marian-blue">
        DESIGN SYSTEM
      </h1>

      <hr />

      <h1 className="text-2xl font-sans text-marian-blue">
        Typography
      </h1>
      <p className="text-xs font-sans text-marian-blue">
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu
      </p>
      <p className="text-sm font-sans text-marian-blue">
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu
      </p>
      <p className="text-base font-sans text-marian-blue">
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu
      </p>
      <p className="text-lg font-sans text-marian-blue">
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu
      </p>
      <p className="text-xl font-sans text-marian-blue">
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu
      </p>
      <p className="text-2xl font-sans text-marian-blue">
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu
      </p>
      <p className="text-3xl font-sans text-marian-blue">
        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu
      </p>

      <hr />

      <h1 className="text-2xl font-sans text-marian-blue">
        Buttons
      </h1>
      <div className="flex gap-2 my-2">
        <Button variant="primary">
          Primary
        </Button>

        <Button variant="secondary">
          Secondary
        </Button>

        <Button variant="tertiary">
          Tertiary
        </Button>

        <Button variant="danger">
          Danger
        </Button>
      </div>
      <div className="flex gap-2 my-2">
        <LinkButton href="/" variant="primary">
          Primary
        </LinkButton>

        <LinkButton href="/" variant="secondary">
          Secondary
        </LinkButton>

        <LinkButton href="/" variant="tertiary">
          Tertiary
        </LinkButton>

        <LinkButton href="/" variant="danger">
          Danger
        </LinkButton>
      </div>
    </section>
  )
}
