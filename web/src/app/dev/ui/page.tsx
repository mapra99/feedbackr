import { Button, LinkButton } from '@/components/button'
import UpvoteButton from '@/components/upvote-button'
import Tag from '@/components/tag'
import DropdownList from '@/components/dropdown-list'
import FilterSelect from '@/components/filter-select'
import TextField from '@/components/text-field'

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

      <hr />

      <h1 className="text-2xl font-sans test-marian-blue">
        Interactive Elements
      </h1>

      <div className="flex gap-2 my-2">
        <UpvoteButton />
        <Tag />
        <DropdownList
          items={[
            { id: 'item1', label: 'Item 1', value: 'item-1' },
            { id: 'item2', label: 'Item 2', value: 'item-2' },
            { id: 'item3', label: 'Item 3', value: 'item-3' },
          ]}
        />
        <FilterSelect
          label="Sort By"
          selectedId='item1'
          items={[
            { id: 'item1', label: 'Item 1', value: 'item-1' },
            { id: 'item2', label: 'Item 2', value: 'item-2' },
            { id: 'item3', label: 'Item 3', value: 'item-3' },
          ]}
        />
      </div>

      <div className="flex gap-2 my-2">
        <TextField />

        <TextField error="Something went reaally wrong" />
      </div>
    </section>
  )
}
