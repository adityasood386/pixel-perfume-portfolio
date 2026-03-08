

## Add "Terms and Conditions Apply" to Packages Section

Add a small disclaimer text below the packages grid in `src/components/PackagesSection.tsx`.

### Change
After the closing `</div>` of the packages grid (the `grid md:grid-cols-3` div), add a centered muted text line:

```tsx
<p className="text-center text-xs text-muted-foreground/60 mt-8 font-body tracking-wide">
  * Terms and conditions apply. Prices may vary based on location and requirements.
</p>
```

This keeps it subtle and consistent with the existing design language.

