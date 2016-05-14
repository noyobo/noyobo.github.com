# Colors: black, red, green, yellow, *blue, magenta, cyan, and white.


# Git info
local git_info='$(git_prompt_info)'

ZSH_THEME_GIT_PROMPT_PREFIX=" %{$fg_bold[magenta]%}⤵%{$reset_color%}  %{$fg[blue]%}git:(%{$fg_bold[red]%}"
ZSH_THEME_GIT_PROMPT_SUFFIX="%{$reset_color%}"

ZSH_THEME_GIT_PROMPT_DIRTY="%{$fg[blue]%}) 🖌" # Ⓓ %{$fg[yellow]%} 
ZSH_THEME_GIT_PROMPT_UNTRACKED="%{$fg[blue]%}) 💊" # ⓣ %{$fg[cyan]%} 
ZSH_THEME_GIT_PROMPT_CLEAN="%{$fg[blue]%}) 💟" # Ⓞ %{$fg[green]%} 

ZSH_THEME_GIT_PROMPT_ADDED="%{$fg[blue]%}) 😍" # ⓐ ⑃ %{$fg[cyan]%} 
ZSH_THEME_GIT_PROMPT_MODIFIED="%{$fg[blue]%}) 😜"  # ⓜ ⑁ %{$fg[yellow]%} 
ZSH_THEME_GIT_PROMPT_DELETED="%{$fg[blue]%}) 😵" # ⓧ ⑂ %{$fg[red]%}
ZSH_THEME_GIT_PROMPT_RENAMED="%{$fg[blue]%}) 😴" # ⓡ ⑄ %{$fg[blue]%}
ZSH_THEME_GIT_PROMPT_UNMERGED="%{$fg[blue]%}) 😱" # ⓤ ⑊ %{$fg[magenta]%}
ZSH_THEME_GIT_PROMPT_AHEAD="%{$fg[blue]%}) 🤕" # %{$fg[blue]%}

local exit_code="%(?,, code: %{$fg[red]%}%?%{$reset_color%})"
local ret_status="%(?:%{$fg_bold[green]%}➜ :%{$fg_bold[red]%}➜ )"


PROMPT="%{$fg_bold[blue]%}#%{$reset_color%} \
%(#,%{$bg[yellow]%}%{$fg[black]%}%n%{$reset_color%},%{$fg[cyan]%}%n) \
%{$fg_bold[gray]%}🕑  %* \
${git_info} \
$exit_code
${ret_status}%{$fg_bold[cyan]%}%c%{$reset_color%} \
%{$fg_bold[magenta]%}$ %{$reset_color%}"
