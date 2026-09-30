<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Preserve the source project's five TanStack routes, shared components, CSS tokens, and images as the visual authority; exact recreation requires retaining their composition.
- Store migrated source media as new project-scoped Lovable asset pointers; original project pointers cannot be served here.
- Keep figurine choices in sessionStorage and uploaded photos in IndexedDB as in the source; this preserves the original local checkout flow without introducing an unrequested backend.
- Keep FAQ as a standalone `/faq` route with local presentation data; this makes it shareable without introducing persistence.
