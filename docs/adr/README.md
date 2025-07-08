# Architecture Decision Records (ADR)

This directory contains Architecture Decision Records and session handoff documentation for the MAMIA project.

## Session Handoffs

Session handoff files are automatically generated using:

```bash
npm run handoff
```

This creates timestamped documentation that includes:
- Current git branch and commit
- Changed files status
- Checklist progress
- Next steps for continuation

## File Naming Convention

- `YYYYMMDDTHHMMSS-session-handoff.md` - Session handoff records
- `YYYYMMDD-feature-name.md` - Architecture decisions

## Purpose

These records help maintain context across:
- Development sessions
- Team handoffs
- AI assistant interactions
- Architecture decisions

## Usage

1. **Before ending a session**: Run `npm run handoff`
2. **Starting a new session**: Check latest handoff file
3. **Making architecture decisions**: Document in new ADR file

## Example Session Handoff

```markdown
# Session hand-off 20250107T152300

| Field | Value |
|-------|-------|
| Branch | feature/auth-pages |
| Last commit | abc123f |
| Changed files | M src/app/login/page.tsx |
| Checklist delta | _none_ |

## Next steps
- [ ] Complete login form validation
- [ ] Add error handling
- [ ] Update tests
```

This ensures smooth transitions and maintains project continuity. 