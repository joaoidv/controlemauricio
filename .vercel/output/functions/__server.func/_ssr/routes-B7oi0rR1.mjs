import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { f as require_jsx_runtime, n as CheckboxIndicator, t as Checkbox$1 } from "../_libs/@radix-ui/react-checkbox+[...].mjs";
import { t as supabase } from "./client-DhlAu9-x.mjs";
import { _ as ChevronUp, a as TrendingDown, b as CalendarCheck2, c as Pencil, d as LayoutDashboard, f as Gift, g as CircleAlert, h as CircleCheck, i as TrendingUp, l as MessageSquareQuote, m as CircleX, n as Users, o as Trash2, p as Clock, r as UserCog, s as Plus, t as X, u as ListChecks, v as ChevronDown, y as Check } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B7oi0rR1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Card = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex flex-col space-y-1.5 p-6", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("font-semibold leading-none tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("p-6 pt-0", className),
	...props
}));
CardContent.displayName = "CardContent";
var CardFooter = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("flex items-center p-6 pt-0", className),
	...props
}));
CardFooter.displayName = "CardFooter";
var badgeVariants = cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
	variants: { variant: {
		default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
		secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
		destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
		outline: "text-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-primary/20", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full w-full flex-1 bg-primary transition-all",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Checkbox = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox$1, {
	ref,
	className: cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxIndicator, {
		className: cn("grid place-content-center text-current"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
	})
}));
Checkbox.displayName = Checkbox$1.displayName;
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var data_actions_default = /*#__PURE__*/ JSON.parse("[{\"id\":0,\"client\":\"FM Imports\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":1,\"client\":\"FM Imports\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":2,\"client\":\"FM Imports\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":3,\"client\":\"FM Imports\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":4,\"client\":\"FM Imports\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":5,\"client\":\"FM Imports\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":6,\"client\":\"FM Imports\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":7,\"client\":\"FM Imports\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":8,\"client\":\"FM Imports\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":9,\"client\":\"FM Imports\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":10,\"client\":\"FM Imports\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":11,\"client\":\"FM Imports\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":12,\"client\":\"FM Imports\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":13,\"client\":\"FM Imports\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":14,\"client\":\"FM Imports\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":15,\"client\":\"FM Imports\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":16,\"client\":\"FM Imports\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":17,\"client\":\"FM Imports\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":18,\"client\":\"FM Imports\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":19,\"client\":\"FM Imports\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":20,\"client\":\"FM Imports\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":21,\"client\":\"FM Imports\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":22,\"client\":\"FM Imports\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":23,\"client\":\"FM Imports\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":24,\"client\":\"FM Imports\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":25,\"client\":\"FM Imports\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":26,\"client\":\"FM Imports\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":27,\"client\":\"FM Imports\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":28,\"client\":\"FM Imports\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":29,\"client\":\"FM Imports\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":30,\"client\":\"FM Imports\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":31,\"client\":\"FM Imports\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":32,\"client\":\"FM Imports\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":33,\"client\":\"FM Imports\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":34,\"client\":\"FM Imports\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":35,\"client\":\"FM Imports\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":36,\"client\":\"FM Imports\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":37,\"client\":\"FM Imports\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":38,\"client\":\"FM Imports\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":39,\"client\":\"FM Imports\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":40,\"client\":\"FM Imports\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":41,\"client\":\"FM Imports\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":42,\"client\":\"FM Imports\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":43,\"client\":\"FM Imports\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":44,\"client\":\"FM Imports\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":45,\"client\":\"FM Imports\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":46,\"client\":\"FM Imports\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":47,\"client\":\"FM Imports\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":48,\"client\":\"Santo Laser\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":49,\"client\":\"Santo Laser\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":50,\"client\":\"Santo Laser\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":51,\"client\":\"Santo Laser\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":52,\"client\":\"Santo Laser\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":53,\"client\":\"Santo Laser\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":54,\"client\":\"Santo Laser\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":55,\"client\":\"Santo Laser\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":56,\"client\":\"Santo Laser\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":57,\"client\":\"Santo Laser\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":58,\"client\":\"Santo Laser\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":59,\"client\":\"Santo Laser\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":60,\"client\":\"Santo Laser\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":61,\"client\":\"Santo Laser\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":62,\"client\":\"Santo Laser\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":63,\"client\":\"Santo Laser\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":64,\"client\":\"Santo Laser\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":65,\"client\":\"Santo Laser\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":66,\"client\":\"Santo Laser\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":67,\"client\":\"Santo Laser\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":68,\"client\":\"Santo Laser\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":69,\"client\":\"Santo Laser\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":70,\"client\":\"Santo Laser\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":71,\"client\":\"Santo Laser\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":72,\"client\":\"Santo Laser\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":73,\"client\":\"Santo Laser\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":74,\"client\":\"Santo Laser\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":75,\"client\":\"Santo Laser\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":76,\"client\":\"Santo Laser\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":77,\"client\":\"Santo Laser\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":78,\"client\":\"Santo Laser\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":79,\"client\":\"Santo Laser\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":80,\"client\":\"Santo Laser\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":81,\"client\":\"Santo Laser\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":82,\"client\":\"Santo Laser\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":83,\"client\":\"Santo Laser\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":84,\"client\":\"Santo Laser\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":85,\"client\":\"Santo Laser\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":86,\"client\":\"Santo Laser\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":87,\"client\":\"Santo Laser\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":88,\"client\":\"Santo Laser\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":89,\"client\":\"Santo Laser\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":90,\"client\":\"Santo Laser\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":91,\"client\":\"Santo Laser\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":92,\"client\":\"Santo Laser\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":93,\"client\":\"Santo Laser\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":94,\"client\":\"Santo Laser\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":95,\"client\":\"Santo Laser\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":96,\"client\":\"Dw Apple\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":97,\"client\":\"Dw Apple\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":98,\"client\":\"Dw Apple\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":99,\"client\":\"Dw Apple\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":100,\"client\":\"Dw Apple\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":101,\"client\":\"Dw Apple\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":102,\"client\":\"Dw Apple\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":103,\"client\":\"Dw Apple\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":104,\"client\":\"Dw Apple\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":105,\"client\":\"Dw Apple\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":106,\"client\":\"Dw Apple\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":107,\"client\":\"Dw Apple\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":108,\"client\":\"Dw Apple\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":109,\"client\":\"Dw Apple\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":110,\"client\":\"Dw Apple\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":111,\"client\":\"Dw Apple\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":112,\"client\":\"Dw Apple\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":113,\"client\":\"Dw Apple\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":114,\"client\":\"Dw Apple\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":115,\"client\":\"Dw Apple\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":116,\"client\":\"Dw Apple\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":117,\"client\":\"Dw Apple\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":118,\"client\":\"Dw Apple\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":119,\"client\":\"Dw Apple\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":120,\"client\":\"Dw Apple\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":121,\"client\":\"Dw Apple\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":122,\"client\":\"Dw Apple\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":123,\"client\":\"Dw Apple\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":124,\"client\":\"Dw Apple\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":125,\"client\":\"Dw Apple\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":126,\"client\":\"Dw Apple\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":127,\"client\":\"Dw Apple\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":128,\"client\":\"Dw Apple\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":129,\"client\":\"Dw Apple\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":130,\"client\":\"Dw Apple\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":131,\"client\":\"Dw Apple\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":132,\"client\":\"Dw Apple\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":133,\"client\":\"Dw Apple\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":134,\"client\":\"Dw Apple\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":135,\"client\":\"Dw Apple\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":136,\"client\":\"Dw Apple\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":137,\"client\":\"Dw Apple\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":138,\"client\":\"Dw Apple\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":139,\"client\":\"Dw Apple\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":140,\"client\":\"Dw Apple\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":141,\"client\":\"Dw Apple\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":142,\"client\":\"Dw Apple\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":143,\"client\":\"Dw Apple\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":144,\"client\":\"Poliana Campos\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":145,\"client\":\"Poliana Campos\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":146,\"client\":\"Poliana Campos\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":147,\"client\":\"Poliana Campos\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":148,\"client\":\"Poliana Campos\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":149,\"client\":\"Poliana Campos\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":150,\"client\":\"Poliana Campos\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":151,\"client\":\"Poliana Campos\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":152,\"client\":\"Poliana Campos\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":153,\"client\":\"Poliana Campos\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":154,\"client\":\"Poliana Campos\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":155,\"client\":\"Poliana Campos\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":156,\"client\":\"Poliana Campos\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":157,\"client\":\"Poliana Campos\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":158,\"client\":\"Poliana Campos\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":159,\"client\":\"Poliana Campos\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":160,\"client\":\"Poliana Campos\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":161,\"client\":\"Poliana Campos\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":162,\"client\":\"Poliana Campos\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":163,\"client\":\"Poliana Campos\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":164,\"client\":\"Poliana Campos\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":165,\"client\":\"Poliana Campos\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":166,\"client\":\"Poliana Campos\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":167,\"client\":\"Poliana Campos\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":168,\"client\":\"Poliana Campos\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":169,\"client\":\"Poliana Campos\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":170,\"client\":\"Poliana Campos\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":171,\"client\":\"Poliana Campos\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":172,\"client\":\"Poliana Campos\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":173,\"client\":\"Poliana Campos\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":174,\"client\":\"Poliana Campos\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":175,\"client\":\"Poliana Campos\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":176,\"client\":\"Poliana Campos\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":177,\"client\":\"Poliana Campos\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":178,\"client\":\"Poliana Campos\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":179,\"client\":\"Poliana Campos\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":180,\"client\":\"Poliana Campos\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":181,\"client\":\"Poliana Campos\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":182,\"client\":\"Poliana Campos\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":183,\"client\":\"Poliana Campos\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":184,\"client\":\"Poliana Campos\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":185,\"client\":\"Poliana Campos\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":186,\"client\":\"Poliana Campos\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":187,\"client\":\"Poliana Campos\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":188,\"client\":\"Poliana Campos\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":189,\"client\":\"Poliana Campos\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":190,\"client\":\"Poliana Campos\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":191,\"client\":\"Poliana Campos\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":192,\"client\":\"Henrique Masko\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":193,\"client\":\"Henrique Masko\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":194,\"client\":\"Henrique Masko\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":195,\"client\":\"Henrique Masko\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":196,\"client\":\"Henrique Masko\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":197,\"client\":\"Henrique Masko\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":198,\"client\":\"Henrique Masko\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":199,\"client\":\"Henrique Masko\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":200,\"client\":\"Henrique Masko\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":201,\"client\":\"Henrique Masko\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":202,\"client\":\"Henrique Masko\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":203,\"client\":\"Henrique Masko\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":204,\"client\":\"Henrique Masko\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":205,\"client\":\"Henrique Masko\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":206,\"client\":\"Henrique Masko\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":207,\"client\":\"Henrique Masko\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":208,\"client\":\"Henrique Masko\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":209,\"client\":\"Henrique Masko\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":210,\"client\":\"Henrique Masko\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":211,\"client\":\"Henrique Masko\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":212,\"client\":\"Henrique Masko\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":213,\"client\":\"Henrique Masko\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":214,\"client\":\"Henrique Masko\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":215,\"client\":\"Henrique Masko\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":216,\"client\":\"Henrique Masko\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":217,\"client\":\"Henrique Masko\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":218,\"client\":\"Henrique Masko\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":219,\"client\":\"Henrique Masko\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":220,\"client\":\"Henrique Masko\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":221,\"client\":\"Henrique Masko\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":222,\"client\":\"Henrique Masko\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":223,\"client\":\"Henrique Masko\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":224,\"client\":\"Henrique Masko\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":225,\"client\":\"Henrique Masko\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":226,\"client\":\"Henrique Masko\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":227,\"client\":\"Henrique Masko\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":228,\"client\":\"Henrique Masko\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":229,\"client\":\"Henrique Masko\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":230,\"client\":\"Henrique Masko\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":231,\"client\":\"Henrique Masko\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":232,\"client\":\"Henrique Masko\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":233,\"client\":\"Henrique Masko\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":234,\"client\":\"Henrique Masko\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":235,\"client\":\"Henrique Masko\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":236,\"client\":\"Henrique Masko\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":237,\"client\":\"Henrique Masko\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":238,\"client\":\"Henrique Masko\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":239,\"client\":\"Henrique Masko\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":240,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":241,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":242,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":243,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":244,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":245,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":246,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":247,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":248,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":249,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":250,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":251,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":252,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":253,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":254,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":255,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":256,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":257,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":258,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":259,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":260,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":261,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":262,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":263,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":264,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":265,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":266,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":267,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":268,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":269,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":270,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":271,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":272,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":273,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":274,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":275,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":276,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":277,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":278,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":279,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":280,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":281,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":282,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":283,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":284,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":285,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":286,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":287,\"client\":\"Claudio Barbosa\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":288,\"client\":\"Kids Toys\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":289,\"client\":\"Kids Toys\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":290,\"client\":\"Kids Toys\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":291,\"client\":\"Kids Toys\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":292,\"client\":\"Kids Toys\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":293,\"client\":\"Kids Toys\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":294,\"client\":\"Kids Toys\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":295,\"client\":\"Kids Toys\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":296,\"client\":\"Kids Toys\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":297,\"client\":\"Kids Toys\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":298,\"client\":\"Kids Toys\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":299,\"client\":\"Kids Toys\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":300,\"client\":\"Kids Toys\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":301,\"client\":\"Kids Toys\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":302,\"client\":\"Kids Toys\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":303,\"client\":\"Kids Toys\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":304,\"client\":\"Kids Toys\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":305,\"client\":\"Kids Toys\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":306,\"client\":\"Kids Toys\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":307,\"client\":\"Kids Toys\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":308,\"client\":\"Kids Toys\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":309,\"client\":\"Kids Toys\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":310,\"client\":\"Kids Toys\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":311,\"client\":\"Kids Toys\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":312,\"client\":\"Kids Toys\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":313,\"client\":\"Kids Toys\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":314,\"client\":\"Kids Toys\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":315,\"client\":\"Kids Toys\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":316,\"client\":\"Kids Toys\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":317,\"client\":\"Kids Toys\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":318,\"client\":\"Kids Toys\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":319,\"client\":\"Kids Toys\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":320,\"client\":\"Kids Toys\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":321,\"client\":\"Kids Toys\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":322,\"client\":\"Kids Toys\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":323,\"client\":\"Kids Toys\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":324,\"client\":\"Kids Toys\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":325,\"client\":\"Kids Toys\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":326,\"client\":\"Kids Toys\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":327,\"client\":\"Kids Toys\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":328,\"client\":\"Kids Toys\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":329,\"client\":\"Kids Toys\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":330,\"client\":\"Kids Toys\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":331,\"client\":\"Kids Toys\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":332,\"client\":\"Kids Toys\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":333,\"client\":\"Kids Toys\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":334,\"client\":\"Kids Toys\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":335,\"client\":\"Kids Toys\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":336,\"client\":\"Resultage\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":337,\"client\":\"Resultage\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":338,\"client\":\"Resultage\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":339,\"client\":\"Resultage\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":340,\"client\":\"Resultage\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":341,\"client\":\"Resultage\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":342,\"client\":\"Resultage\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":343,\"client\":\"Resultage\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":344,\"client\":\"Resultage\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":345,\"client\":\"Resultage\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":346,\"client\":\"Resultage\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":347,\"client\":\"Resultage\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":348,\"client\":\"Resultage\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":349,\"client\":\"Resultage\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":350,\"client\":\"Resultage\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":351,\"client\":\"Resultage\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":352,\"client\":\"Resultage\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":353,\"client\":\"Resultage\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":354,\"client\":\"Resultage\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":355,\"client\":\"Resultage\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":356,\"client\":\"Resultage\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":357,\"client\":\"Resultage\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":358,\"client\":\"Resultage\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":359,\"client\":\"Resultage\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":360,\"client\":\"Resultage\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":361,\"client\":\"Resultage\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":362,\"client\":\"Resultage\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":363,\"client\":\"Resultage\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":364,\"client\":\"Resultage\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":365,\"client\":\"Resultage\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":366,\"client\":\"Resultage\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":367,\"client\":\"Resultage\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":368,\"client\":\"Resultage\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":369,\"client\":\"Resultage\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":370,\"client\":\"Resultage\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":371,\"client\":\"Resultage\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":372,\"client\":\"Resultage\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":373,\"client\":\"Resultage\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":374,\"client\":\"Resultage\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":375,\"client\":\"Resultage\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":376,\"client\":\"Resultage\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":377,\"client\":\"Resultage\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":378,\"client\":\"Resultage\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":379,\"client\":\"Resultage\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":380,\"client\":\"Resultage\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":381,\"client\":\"Resultage\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":382,\"client\":\"Resultage\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":383,\"client\":\"Resultage\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":384,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":385,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":386,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":387,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":388,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":389,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":390,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":391,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":392,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":393,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":394,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":395,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":396,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":397,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":398,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":399,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":400,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":401,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":402,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":403,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":404,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":405,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":406,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":407,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":408,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":409,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":410,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":411,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":412,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":413,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":414,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":415,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":416,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":417,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":418,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":419,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":420,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":421,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":422,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":423,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":424,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":425,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":426,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":427,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":428,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":429,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":430,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":431,\"client\":\"Rafaela Mori\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":432,\"client\":\"Arte Revide\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":433,\"client\":\"Arte Revide\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":434,\"client\":\"Arte Revide\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":435,\"client\":\"Arte Revide\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":436,\"client\":\"Arte Revide\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":437,\"client\":\"Arte Revide\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":438,\"client\":\"Arte Revide\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":439,\"client\":\"Arte Revide\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":440,\"client\":\"Arte Revide\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":441,\"client\":\"Arte Revide\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":442,\"client\":\"Arte Revide\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":443,\"client\":\"Arte Revide\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":444,\"client\":\"Arte Revide\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":445,\"client\":\"Arte Revide\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":446,\"client\":\"Arte Revide\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":447,\"client\":\"Arte Revide\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":448,\"client\":\"Arte Revide\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":449,\"client\":\"Arte Revide\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":450,\"client\":\"Arte Revide\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":451,\"client\":\"Arte Revide\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":452,\"client\":\"Arte Revide\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":453,\"client\":\"Arte Revide\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":454,\"client\":\"Arte Revide\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":455,\"client\":\"Arte Revide\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":456,\"client\":\"Arte Revide\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":457,\"client\":\"Arte Revide\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":458,\"client\":\"Arte Revide\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":459,\"client\":\"Arte Revide\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":460,\"client\":\"Arte Revide\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":461,\"client\":\"Arte Revide\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":462,\"client\":\"Arte Revide\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":463,\"client\":\"Arte Revide\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":464,\"client\":\"Arte Revide\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":465,\"client\":\"Arte Revide\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":466,\"client\":\"Arte Revide\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":467,\"client\":\"Arte Revide\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":468,\"client\":\"Arte Revide\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":469,\"client\":\"Arte Revide\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":470,\"client\":\"Arte Revide\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":471,\"client\":\"Arte Revide\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":472,\"client\":\"Arte Revide\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":473,\"client\":\"Arte Revide\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":474,\"client\":\"Arte Revide\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":475,\"client\":\"Arte Revide\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":476,\"client\":\"Arte Revide\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":477,\"client\":\"Arte Revide\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":478,\"client\":\"Arte Revide\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":479,\"client\":\"Arte Revide\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":480,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":481,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":482,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":483,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-02\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":484,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":485,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":486,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-04\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":487,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":488,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":489,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":490,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-07\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":491,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":492,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":493,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":494,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-09\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":495,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":496,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":497,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-11\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":498,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":499,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":500,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":501,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-14\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":502,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":503,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":504,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":505,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-16\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":506,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":507,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":508,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-18\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":509,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":510,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":511,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":512,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-21\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":513,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":514,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":515,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":516,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-23\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"},{\"id\":517,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":518,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Enviar checklist de otimização seguindo o modelo pré-estabelecido.\"},{\"id\":519,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-25\",\"day\":\"Sexta-feira\",\"action\":\"Verificar saldo de todas as contas para que não parem durante o final de semana.\"},{\"id\":520,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Enviar complemento dos relatórios até às 12:00.\"},{\"id\":521,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Cobrar feedback dos clientes no grupo referente aos resultados.\"},{\"id\":522,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":523,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-28\",\"day\":\"Segunda-feira\",\"action\":\"Com base no feedback dos clientes, realizar as otimizações cabíveis.\"},{\"id\":524,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Participar da daily às 10:00.\"},{\"id\":525,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Enviar referências para o cliente gravar.\"},{\"id\":526,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Atualização das ações realizadas pelo gestor, juntamente com as métricas do projeto, seguindo o modelo.\"},{\"id\":527,\"client\":\"Meirelles Advocacia\",\"date\":\"2026-09-30\",\"day\":\"Quarta-feira\",\"action\":\"Reforçar a otimização/melhoria que foi aplicada na segunda-feira.\"}]");
var MONTH_LABEL = "Setembro / 2026";
var MEETING_DEADLINE = "2026-09-10";
var CLIENTS = [
	"FM Imports",
	"Santo Laser",
	"Dw Apple",
	"Poliana Campos",
	"Henrique Masko",
	"Claudio Barbosa",
	"Kids Toys",
	"Resultage",
	"Rafaela Mori",
	"Arte Revide",
	"Meirelles Advocacia"
];
var WEEK_STARTS = [
	"2026-09-01",
	"2026-09-07",
	"2026-09-14",
	"2026-09-21",
	"2026-09-28"
];
var SEED = data_actions_default;
var ACTIONS = SEED.map((a) => ({
	...a,
	id: String(a.id)
}));
/** Modelo de ações semanais (datas + tarefas) usado para novos clientes. */
var ACTION_TEMPLATE = SEED.filter((a) => a.client === SEED[0]?.client).map((a) => ({
	date: a.date,
	day: a.day,
	action: a.action
}));
var seedByClient = /* @__PURE__ */ new Map();
for (const a of ACTIONS) {
	const list = seedByClient.get(a.client) ?? [];
	list.push(a);
	seedByClient.set(a.client, list);
}
/** Ações semanais de um cliente: do seed quando existir, senão geradas pelo modelo. */
function actionsForClient(clientId) {
	const seeded = seedByClient.get(clientId);
	if (seeded) return seeded;
	return ACTION_TEMPLATE.map((t, i) => ({
		id: `${clientId}::${i}`,
		client: clientId,
		date: t.date,
		day: t.day,
		action: t.action
	}));
}
var KEY = "gt-dashboard-2026-09";
var ROW_ID = "2026-09";
function emptyMeeting() {
	return {
		done: false,
		report: false,
		audio: false,
		joaoNotified: false
	};
}
function emptyFourHour() {
	return WEEK_STARTS.map((w) => ({
		weekStart: w,
		fails: {}
	}));
}
var DEFAULT_MANAGER = "Maurício";
function emptyExtras() {
	return {
		indication: false,
		indicationNote: "",
		testimonial: false,
		testimonialNote: ""
	};
}
function defaultState() {
	const fourHour = {};
	const meetings = {};
	const clientExtras = {};
	for (const c of CLIENTS) {
		fourHour[c] = emptyFourHour();
		meetings[c] = emptyMeeting();
		clientExtras[c] = emptyExtras();
	}
	return {
		managerName: DEFAULT_MANAGER,
		clients: CLIENTS.map((c) => ({
			id: c,
			name: c
		})),
		actions: {},
		meetings,
		fourHour,
		clientExtras
	};
}
function normalize(parsed) {
	const base = defaultState();
	const merged = {
		...base,
		...parsed
	};
	if (!Array.isArray(merged.clients) || merged.clients.length === 0) merged.clients = base.clients;
	if (typeof merged.managerName !== "string" || !merged.managerName.trim()) merged.managerName = DEFAULT_MANAGER;
	if (!merged.actions) merged.actions = {};
	if (!merged.meetings) merged.meetings = {};
	if (!merged.fourHour) merged.fourHour = {};
	if (!merged.clientExtras) merged.clientExtras = {};
	for (const c of merged.clients) {
		if (!merged.meetings[c.id]) merged.meetings[c.id] = emptyMeeting();
		if (!merged.fourHour[c.id]) merged.fourHour[c.id] = emptyFourHour();
		if (!merged.clientExtras[c.id]) merged.clientExtras[c.id] = emptyExtras();
	}
	return merged;
}
function useDashboardStore() {
	const [state, setState] = (0, import_react.useState)(() => defaultState());
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [syncStatus, setSyncStatus] = (0, import_react.useState)("idle");
	const lastSyncedRef = (0, import_react.useRef)(null);
	const saveTimer = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		(async () => {
			let localState = null;
			try {
				const raw = localStorage.getItem(KEY);
				if (raw) localState = normalize(JSON.parse(raw));
			} catch {}
			const { data, error } = await supabase.from("dashboard_state").select("data").eq("id", ROW_ID).maybeSingle();
			if (cancelled) return;
			if (!error && data?.data && Object.keys(data.data).length > 0) {
				const remote = normalize(data.data);
				lastSyncedRef.current = JSON.stringify(remote);
				setState(remote);
				setSyncStatus("saved");
			} else if (localState) setState(localState);
			setHydrated(true);
		})();
		return () => {
			cancelled = true;
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		const serialized = JSON.stringify(state);
		try {
			localStorage.setItem(KEY, serialized);
		} catch {}
		if (serialized === lastSyncedRef.current) return;
		setSyncStatus("saving");
		if (saveTimer.current) clearTimeout(saveTimer.current);
		saveTimer.current = setTimeout(async () => {
			const { error } = await supabase.from("dashboard_state").upsert({
				id: ROW_ID,
				data: JSON.parse(serialized),
				updated_at: (/* @__PURE__ */ new Date()).toISOString()
			}, { onConflict: "id" });
			if (error) {
				setSyncStatus("error");
				return;
			}
			lastSyncedRef.current = serialized;
			setSyncStatus("saved");
		}, 700);
		return () => {
			if (saveTimer.current) clearTimeout(saveTimer.current);
		};
	}, [state, hydrated]);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		const channel = supabase.channel("dashboard_state_sync").on("postgres_changes", {
			event: "*",
			schema: "public",
			table: "dashboard_state",
			filter: `id=eq.${ROW_ID}`
		}, (payload) => {
			const incoming = payload.new?.data;
			if (!incoming) return;
			const normalized = normalize(incoming);
			const serialized = JSON.stringify(normalized);
			if (serialized === lastSyncedRef.current) return;
			lastSyncedRef.current = serialized;
			setState(normalized);
		}).subscribe();
		return () => {
			supabase.removeChannel(channel);
		};
	}, [hydrated]);
	return {
		state,
		syncStatus,
		update: (0, import_react.useCallback)((fn) => {
			setState((prev) => fn(structuredClone(prev)));
		}, []),
		hydrated,
		addClient: (0, import_react.useCallback)((name) => {
			const trimmed = name.trim();
			if (!trimmed) return;
			setState((prev) => {
				const next = structuredClone(prev);
				const id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
				next.clients.push({
					id,
					name: trimmed
				});
				next.meetings[id] = emptyMeeting();
				next.fourHour[id] = emptyFourHour();
				next.clientExtras[id] = emptyExtras();
				for (const a of actionsForClient(id)) if (!next.actions[a.id]) next.actions[a.id] = { status: "pending" };
				return next;
			});
		}, []),
		renameClient: (0, import_react.useCallback)((id, name) => {
			setState((prev) => {
				const next = structuredClone(prev);
				const c = next.clients.find((x) => x.id === id);
				if (c) c.name = name;
				return next;
			});
		}, []),
		removeClient: (0, import_react.useCallback)((id) => {
			setState((prev) => {
				const next = structuredClone(prev);
				next.clients = next.clients.filter((c) => c.id !== id);
				delete next.meetings[id];
				delete next.fourHour[id];
				delete next.clientExtras[id];
				return next;
			});
		}, []),
		setManagerName: (0, import_react.useCallback)((name) => {
			setState((prev) => ({
				...prev,
				managerName: name
			}));
		}, [])
	};
}
function Dashboard() {
	const { state, update, hydrated, addClient, renameClient, removeClient, setManagerName, syncStatus } = useDashboardStore();
	const [tab, setTab] = (0, import_react.useState)("overview");
	const [clientFilter, setClientFilter] = (0, import_react.useState)("all");
	const clients = state.clients;
	const stats = (0, import_react.useMemo)(() => {
		let done = 0;
		let missed = 0;
		let pending = 0;
		const missedByClient = {};
		const doneByClient = {};
		const activeIds = new Set(clients.map((c) => c.id));
		const allActions = clients.flatMap((c) => actionsForClient(c.id));
		for (const a of allActions) {
			if (!activeIds.has(a.client)) continue;
			const s = state.actions[a.id]?.status ?? "pending";
			if (s === "done") done++;
			else if (s === "missed") missed++;
			else pending++;
			missedByClient[a.client] = (missedByClient[a.client] ?? 0) + (s === "missed" ? 1 : 0);
			doneByClient[a.client] = (doneByClient[a.client] ?? 0) + (s === "done" ? 1 : 0);
		}
		const totalActions = allActions.length;
		let fourHFails = 0;
		const fourHByClient = {};
		for (const c of clients) {
			const weeks = state.fourHour[c.id] ?? [];
			let n = 0;
			for (const w of weeks) n += Object.values(w.fails).filter(Boolean).length;
			fourHByClient[c.id] = n;
			fourHFails += n;
		}
		const meetingsDone = clients.filter((c) => state.meetings[c.id]?.done).length;
		const indications = clients.filter((c) => state.clientExtras[c.id]?.indication).length;
		const testimonials = clients.filter((c) => state.clientExtras[c.id]?.testimonial).length;
		const totalDiscount = (missed + fourHFails) * 25;
		return {
			done,
			missed,
			pending,
			totalActions,
			missedByClient,
			doneByClient,
			fourHFails,
			fourHByClient,
			meetingsDone,
			indications,
			testimonials,
			totalDiscount,
			clientCount: clients.length
		};
	}, [state, clients]);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "min-h-screen bg-background" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {
			tab,
			setTab,
			managerName: state.managerName
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
			className: "flex-1 min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				stats,
				managerName: state.managerName,
				setManagerName,
				syncStatus
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-6 lg:px-10 pb-16 max-w-[1400px] mx-auto",
				children: [
					tab === "overview" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewTab, {
						stats,
						state,
						clients
					}),
					tab === "actions" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionsTab, {
						state,
						update,
						clients,
						clientFilter,
						setClientFilter
					}),
					tab === "fourh" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FourHourTab, {
						state,
						update,
						clients
					}),
					tab === "meetings" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MeetingsTab, {
						state,
						update,
						clients
					}),
					tab === "clients" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClientsTab, {
						state,
						stats,
						update,
						clients,
						addClient,
						renameClient,
						removeClient
					})
				]
			})]
		})]
	});
}
function Sidebar({ tab, setTab, managerName }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "hidden lg:flex w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground sticky top-0 h-screen border-r border-white/5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-11 w-11 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center overflow-hidden shadow-[var(--shadow-glow)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/logo.png",
							alt: "Logo",
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-base font-semibold leading-tight tracking-[0.24em]",
						children: "VICCON"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[10px] uppercase tracking-[0.18em] text-sidebar-muted mt-0.5",
						children: ["Tráfego · ", MONTH_LABEL]
					})] })]
				}), managerName && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCog, { className: "h-3.5 w-3.5 text-sidebar-muted" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[9px] uppercase tracking-[0.18em] text-sidebar-muted",
							children: "Gestor"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-medium truncate",
							children: managerName
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "px-3 flex-1 space-y-1",
				children: [
					{
						id: "overview",
						label: "Visão geral",
						icon: LayoutDashboard
					},
					{
						id: "actions",
						label: "Ações semanais",
						icon: ListChecks
					},
					{
						id: "fourh",
						label: "Regra 4h",
						icon: Clock
					},
					{
						id: "meetings",
						label: "Reunião mensal",
						icon: CalendarCheck2
					},
					{
						id: "clients",
						label: "Clientes",
						icon: Users
					}
				].map((it) => {
					const Icon = it.icon;
					const active = tab === it.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setTab(it.id),
						className: cn("w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors", active ? "bg-white/10 text-white font-medium" : "text-sidebar-muted hover:text-white hover:bg-white/5"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" }),
							it.label,
							active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-auto h-1.5 w-1.5 rounded-full bg-primary" })
						]
					}, it.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-4 m-3 rounded-2xl border border-white/10 relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 opacity-90",
						style: { background: "var(--gradient-brand)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.18em] text-white/70",
							children: "Desconto por falha"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-2xl font-semibold mt-1 text-white",
							children: [
								"R$ ",
								25,
								",00"
							]
						})]
					})
				]
			})
		]
	});
}
function SyncBadge({ status }) {
	const s = {
		idle: {
			label: "Sincronizado",
			dot: "bg-muted-foreground/50"
		},
		saving: {
			label: "Salvando…",
			dot: "bg-amber-400 animate-pulse"
		},
		saved: {
			label: "Salvo na nuvem",
			dot: "bg-emerald-400"
		},
		error: {
			label: "Falha ao salvar",
			dot: "bg-red-500"
		}
	}[status];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("h-1.5 w-1.5 rounded-full", s.dot) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] text-muted-foreground",
			children: s.label
		})]
	});
}
function Header({ stats, managerName, setManagerName, syncStatus }) {
	const completionPct = stats.totalActions ? Math.round(stats.done / stats.totalActions * 100) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-b border-white/5 bg-card/70 backdrop-blur-xl sticky top-0 z-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-6 lg:px-10 py-5 max-w-[1400px] mx-auto flex flex-wrap items-center gap-4 justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-muted-foreground mb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-block h-1.5 w-1.5 rounded-full",
						style: { background: "var(--gradient-brand)" }
					}), "Viccon · Assessoria de Tecnologia & Vendas"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-semibold tracking-tight",
					children: "Controle do gestor de tráfego"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground mt-0.5",
					children: ["Referência: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-foreground",
						children: MONTH_LABEL
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-4 flex-wrap",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SyncBadge, { status: syncStatus }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-xl border border-border bg-background/60 pl-3 pr-1 py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCog, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[9px] uppercase tracking-[0.18em] text-muted-foreground",
								children: "Gestor de tráfego"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: managerName,
								onChange: (e) => setManagerName(e.target.value),
								placeholder: "Nome do gestor",
								className: "bg-transparent text-sm font-medium outline-none placeholder:text-muted-foreground/60 w-44"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden sm:block text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] uppercase tracking-wide text-muted-foreground",
							children: "Conclusão do mês"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xl font-semibold",
							children: [completionPct, "%"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: completionPct })
					})
				]
			})]
		})
	});
}
function OverviewTab({ stats, state, clients }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-8 space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Ações concluídas",
					value: `${stats.done}/${stats.totalActions}`,
					icon: CircleCheck,
					tone: "success",
					hint: `${stats.pending} pendentes`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Ações não executadas",
					value: String(stats.missed),
					icon: CircleX,
					tone: "danger",
					hint: "Geram desconto"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Falhas regra 4h",
					value: String(stats.fourHFails),
					icon: CircleAlert,
					tone: "warning"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KpiCard, {
					label: "Desconto total",
					value: `R$ ${stats.totalDiscount},00`,
					icon: TrendingDown,
					tone: "danger",
					hint: `R$ 25 por falha`
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 lg:grid-cols-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-6 lg:col-span-2 shadow-[var(--shadow-card)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between mb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold",
						children: "Desempenho por cliente"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: "Ações concluídas x pendentes/não executadas"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "secondary",
						children: [clients.length, " clientes"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: clients.map((c) => {
						const total = actionsForClient(c.id).length;
						const done = stats.doneByClient[c.id] ?? 0;
						const missed = stats.missedByClient[c.id] ?? 0;
						const pct = total ? done / total * 100 : 0;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-sm mb-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 text-xs text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-success",
										children: [done, " ok"]
									}),
									missed > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-danger",
										children: [missed, " falhas"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [total ? Math.round(pct) : 0, "%"] })
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-2 rounded-full bg-muted overflow-hidden flex",
							children: total > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-primary transition-all",
								style: { width: `${done / total * 100}%` }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "bg-danger transition-all",
								style: { width: `${missed / total * 100}%` }
							})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-full text-[10px] text-muted-foreground pl-2",
								children: "sem ações cadastradas"
							})
						})] }, c.id);
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6 shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarCheck2, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-sm",
									children: "Reuniões do mês"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-3xl font-semibold mt-2",
								children: [stats.meetingsDone, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-lg text-muted-foreground font-normal",
									children: [
										" ",
										"/",
										clients.length
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground mt-1",
								children: ["Prazo: até ", new Date(MEETING_DEADLINE).toLocaleDateString("pt-BR")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
								className: "mt-4",
								value: clients.length ? stats.meetingsDone / clients.length * 100 : 0
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6 shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-4 w-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-sm",
									children: "Indicações & depoimentos"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3 mt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-3 w-3" }), " Indicações"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-2xl font-semibold mt-1",
										children: [stats.indications, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm text-muted-foreground font-normal",
											children: ["/", clients.length]
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-lg border border-border p-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareQuote, { className: "h-3 w-3" }), " Depoimentos"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-2xl font-semibold mt-1",
										children: [stats.testimonials, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-sm text-muted-foreground font-normal",
											children: ["/", clients.length]
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground mt-3",
								children: "Registre em \"Clientes\" quem indicou alguém ou enviou depoimento no mês."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-6 shadow-[var(--shadow-card)] bg-[var(--gradient-hero)] text-white border-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 mb-1 opacity-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-sm",
									children: "Resumo financeiro"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-3xl font-semibold mt-2",
								children: [
									"R$ ",
									stats.totalDiscount,
									",00"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs opacity-90 mt-1",
								children: [stats.missed + stats.fourHFails, " falhas registradas até o momento"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex gap-2 text-[11px]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "px-2 py-1 rounded-full bg-white/15",
									children: [stats.missed, " ações"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "px-2 py-1 rounded-full bg-white/15",
									children: [stats.fourHFails, " regra 4h"]
								})]
							})
						]
					})
				]
			})]
		})]
	});
}
function KpiCard({ label, value, hint, icon: Icon, tone }) {
	const toneClasses = {
		success: "bg-success/10 text-success",
		danger: "bg-danger/10 text-danger",
		warning: "bg-warning/15 text-warning-foreground",
		default: "bg-muted text-foreground"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
		className: "p-5 shadow-[var(--shadow-card)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs uppercase tracking-wide text-muted-foreground",
					children: label
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-2xl font-semibold mt-2",
					children: value
				}),
				hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground mt-1",
					children: hint
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("h-9 w-9 rounded-lg flex items-center justify-center", toneClasses),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
			})]
		})
	});
}
function ActionsTab({ state, update, clients, clientFilter, setClientFilter }) {
	(0, import_react.useMemo)(() => new Set(clients.map((c) => c.id)), [clients]);
	const nameById = (0, import_react.useMemo)(() => Object.fromEntries(clients.map((c) => [c.id, c.name])), [clients]);
	const filtered = (0, import_react.useMemo)(() => clients.filter((c) => clientFilter === "all" ? true : c.id === clientFilter).flatMap((c) => actionsForClient(c.id)), [clientFilter, clients]);
	const groups = (0, import_react.useMemo)(() => {
		const map = /* @__PURE__ */ new Map();
		for (const a of filtered) {
			if (!map.has(a.client)) map.set(a.client, /* @__PURE__ */ new Map());
			const dm = map.get(a.client);
			if (!dm.has(a.date)) dm.set(a.date, []);
			dm.get(a.date).push(a);
		}
		return map;
	}, [filtered]);
	function setStatus(id, status) {
		update((s) => {
			s.actions[id] = {
				...s.actions[id] ?? {},
				status
			};
			return s;
		});
	}
	function setNote(id, note) {
		update((s) => {
			s.actions[id] = {
				...s.actions[id] ?? { status: "pending" },
				note
			};
			return s;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-8 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold",
					children: "Ações semanais"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted-foreground",
					children: [
						"Marque cada ação como concluída ou não executada. Cada falha gera R$ ",
						25,
						" de desconto."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: clientFilter,
					onValueChange: setClientFilter,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "w-56",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: "all",
						children: "Todos os clientes"
					}), clients.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: c.id,
						children: c.name
					}, c.id))] })]
				})]
			}),
			groups.size === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "p-8 text-center text-sm text-muted-foreground",
				children: "Nenhuma ação cadastrada para este cliente. Você pode adicionar ou remover clientes na aba \"Clientes\"."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: Array.from(groups.entries()).map(([clientId, dm]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold",
							children: nameById[clientId] ?? clientId
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "outline",
							children: [Array.from(dm.values()).flat().length, " ações"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4",
						children: Array.from(dm.entries()).map(([date, acts]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wide text-muted-foreground mb-2",
							children: (/* @__PURE__ */ new Date(date + "T00:00:00")).toLocaleDateString("pt-BR", {
								weekday: "long",
								day: "2-digit",
								month: "long"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-2",
							children: acts.map((a) => {
								const st = state.actions[a.id]?.status ?? "pending";
								const note = state.actions[a.id]?.note ?? "";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: cn("rounded-xl border p-3 flex flex-col gap-2 transition-colors", st === "done" && "border-success/40 bg-success/5", st === "missed" && "border-danger/40 bg-danger/5", st === "pending" && "border-border bg-background"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex-1 text-sm leading-relaxed",
											children: a.action
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex gap-1 shrink-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBtn, {
												active: st === "done",
												onClick: () => setStatus(a.id, st === "done" ? "pending" : "done"),
												tone: "success",
												label: "OK"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBtn, {
												active: st === "missed",
												onClick: () => setStatus(a.id, st === "missed" ? "pending" : "missed"),
												tone: "danger",
												label: "Falhou"
											})]
										})]
									}), st === "missed" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										placeholder: "Observação (motivo, avisou o João, etc.)",
										value: note,
										onChange: (e) => setNote(a.id, e.target.value),
										className: "h-8 text-xs"
									})]
								}, a.id);
							})
						})] }, date))
					})]
				}, clientId))
			})
		]
	});
}
function StatusBtn({ active, onClick, tone, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		className: cn("px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors", !active && "bg-background border-border text-muted-foreground hover:bg-muted", active && tone === "success" && "bg-success text-success-foreground border-success", active && tone === "danger" && "bg-danger text-danger-foreground border-danger"),
		children: label
	});
}
var DAYS = [
	{
		key: "seg",
		label: "Seg"
	},
	{
		key: "ter",
		label: "Ter"
	},
	{
		key: "qua",
		label: "Qua"
	},
	{
		key: "qui",
		label: "Qui"
	},
	{
		key: "sex",
		label: "Sex"
	}
];
function FourHourTab({ state, update, clients }) {
	function toggle(clientId, wIdx, day) {
		update((s) => {
			const arr = s.fourHour[clientId];
			if (!arr) return s;
			arr[wIdx].fails[day] = !arr[wIdx].fails[day];
			return s;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-8 space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl font-semibold",
			children: "Regra das 4 horas"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: "Marque os dias em que o cliente ficou mais de 4 horas sem resposta. Cada marcação gera desconto."
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-2",
			children: clients.map((client) => {
				const weeks = state.fourHour[client.id] ?? [];
				const total = weeks.reduce((n, w) => n + Object.values(w.fails).filter(Boolean).length, 0);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "p-5 shadow-[var(--shadow-card)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold",
							children: client.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: total > 0 ? "destructive" : "secondary",
							children: [
								total,
								" falha",
								total === 1 ? "" : "s"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[80px_repeat(5,1fr)_60px] gap-2 text-[10px] uppercase tracking-wide text-muted-foreground px-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Semana" }),
								DAYS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-center",
									children: d.label
								}, d.key)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right",
									children: "R$"
								})
							]
						}), weeks.map((w, i) => {
							const n = Object.values(w.fails).filter(Boolean).length;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-[80px_repeat(5,1fr)_60px] gap-2 items-center py-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground pl-2",
										children: (/* @__PURE__ */ new Date(w.weekStart + "T00:00:00")).toLocaleDateString("pt-BR", {
											day: "2-digit",
											month: "2-digit"
										})
									}),
									DAYS.map((d) => {
										const on = !!w.fails[d.key];
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => toggle(client.id, i, d.key),
											className: cn("h-9 rounded-lg border text-xs font-medium transition-colors", on ? "bg-danger border-danger text-danger-foreground" : "bg-background border-border text-muted-foreground hover:bg-muted"),
											children: on ? "✕" : ""
										}, d.key);
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-right pr-2 text-muted-foreground",
										children: n * 25
									})
								]
							}, w.weekStart);
						})]
					})]
				}, client.id);
			})
		})]
	});
}
function MeetingsTab({ state, update, clients }) {
	function set(clientId, patch) {
		update((s) => {
			s.meetings[clientId] = {
				...s.meetings[clientId],
				...patch
			};
			return s;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-8 space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-xl font-semibold",
			children: "Reunião mensal de alinhamento"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted-foreground",
			children: [
				"Prazo: até ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: new Date(MEETING_DEADLINE).toLocaleDateString("pt-BR") }),
				". Se o cliente não participar, avise o João e envie relatório + análise em áudio."
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 lg:grid-cols-2",
			children: clients.map((client) => {
				const m = state.meetings[client.id];
				if (!m) return null;
				const complete = m.done && m.report && m.audio;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: cn("p-5 shadow-[var(--shadow-card)] transition-colors", complete && "border-success/40"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-semibold",
							children: client.name
						}), complete ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							className: "bg-success text-success-foreground",
							children: "Completo"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							children: "Em andamento"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								label: "Reunião realizada",
								checked: m.done,
								onChange: (v) => set(client.id, { done: v })
							}),
							m.done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pl-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "date",
									value: m.dateDone ?? "",
									onChange: (e) => set(client.id, { dateDone: e.target.value }),
									className: "h-8 text-xs w-44"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								label: "Relatório mensal enviado",
								checked: m.report,
								onChange: (v) => set(client.id, { report: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								label: "Análise em áudio enviada",
								checked: m.audio,
								onChange: (v) => set(client.id, { audio: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckRow, {
								label: "Cliente não participou → João comunicado",
								checked: m.joaoNotified,
								onChange: (v) => set(client.id, { joaoNotified: v })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								placeholder: "Observação",
								value: m.note ?? "",
								onChange: (e) => set(client.id, { note: e.target.value }),
								className: "mt-2 min-h-[60px] text-xs"
							})
						]
					})]
				}, client.id);
			})
		})]
	});
}
function CheckRow({ label, checked, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex items-center gap-3 cursor-pointer text-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
			checked,
			onCheckedChange: (v) => onChange(Boolean(v))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn(checked && "text-foreground", !checked && "text-muted-foreground"),
			children: label
		})]
	});
}
function ClientsTab({ state, stats, update, clients, addClient, renameClient, removeClient }) {
	const [newName, setNewName] = (0, import_react.useState)("");
	const [editingId, setEditingId] = (0, import_react.useState)(null);
	const [editValue, setEditValue] = (0, import_react.useState)("");
	const [confirmRemoveId, setConfirmRemoveId] = (0, import_react.useState)(null);
	function startEdit(id, name) {
		setEditingId(id);
		setEditValue(name);
	}
	function commitEdit() {
		if (editingId && editValue.trim()) renameClient(editingId, editValue.trim());
		setEditingId(null);
		setEditValue("");
	}
	function toggleExtra(clientId, key) {
		update((s) => {
			const cur = s.clientExtras[clientId] ?? {};
			s.clientExtras[clientId] = {
				...cur,
				[key]: !cur[key]
			};
			return s;
		});
	}
	function setExtraNote(clientId, key, value) {
		update((s) => {
			const cur = s.clientExtras[clientId] ?? {};
			s.clientExtras[clientId] = {
				...cur,
				[key]: value
			};
			return s;
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pt-8 space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold",
				children: "Gerenciar clientes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Adicione, renomeie ou remova clientes conforme entrar ou sair da carteira no mês."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "p-5 shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							addClient(newName);
							setNewName("");
						},
						className: "flex flex-wrap items-center gap-2 mb-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: newName,
							onChange: (e) => setNewName(e.target.value),
							placeholder: "Nome do novo cliente",
							className: "h-9 max-w-sm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							disabled: !newName.trim(),
							className: cn("inline-flex items-center gap-1.5 h-9 px-3 rounded-lg text-sm font-medium transition-colors", "bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Adicionar cliente"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "divide-y divide-border",
						children: [clients.map((c) => {
							const isEditing = editingId === c.id;
							const confirming = confirmRemoveId === c.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "flex items-center gap-3 py-2.5",
								children: isEditing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										autoFocus: true,
										value: editValue,
										onChange: (e) => setEditValue(e.target.value),
										onKeyDown: (e) => {
											if (e.key === "Enter") commitEdit();
											if (e.key === "Escape") {
												setEditingId(null);
												setEditValue("");
											}
										},
										className: "h-8 max-w-sm text-sm"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: commitEdit,
										className: "h-8 w-8 rounded-lg border border-border flex items-center justify-center text-success hover:bg-success/10",
										"aria-label": "Salvar",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => {
											setEditingId(null);
											setEditValue("");
										},
										className: "h-8 w-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:bg-muted",
										"aria-label": "Cancelar",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
									})
								] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium flex-1",
										children: c.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										variant: "outline",
										className: "text-[10px]",
										children: [actionsForClient(c.id).length, " ações"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => startEdit(c.id, c.name),
										className: "h-8 w-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted",
										"aria-label": "Renomear",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" })
									}),
									confirming ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] text-muted-foreground",
												children: "Confirmar?"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => {
													removeClient(c.id);
													setConfirmRemoveId(null);
												},
												className: "h-8 px-2 rounded-lg bg-danger text-danger-foreground text-xs font-medium",
												children: "Remover"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setConfirmRemoveId(null),
												className: "h-8 px-2 rounded-lg border border-border text-xs text-muted-foreground hover:bg-muted",
												children: "Cancelar"
											})
										]
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										onClick: () => setConfirmRemoveId(c.id),
										className: "h-8 w-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-danger hover:bg-danger/10",
										"aria-label": "Remover",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-3.5 w-3.5" })
									})
								] })
							}, c.id);
						}), clients.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "py-6 text-center text-sm text-muted-foreground",
							children: "Nenhum cliente cadastrado. Adicione o primeiro acima."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground mt-3",
						children: "Remover um cliente oculta seus registros do mês atual, mas o histórico de ações fica preservado se você adicioná-lo novamente com o mesmo nome."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-semibold",
				children: "Resumo por cliente"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground",
				children: "Consolidado do mês por cliente: ações, regra 4h, reunião e desconto acumulado."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				className: "overflow-hidden shadow-[var(--shadow-card)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "bg-muted/60 text-xs uppercase tracking-wide text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-left px-5 py-3 font-medium",
										children: "Cliente"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-center px-3 py-3 font-medium",
										children: "Não cumpridas"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-center px-3 py-3 font-medium",
										children: "Regra 4h"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-center px-3 py-3 font-medium",
										children: "Reunião"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "text-right px-5 py-3 font-medium",
										children: "Desconto"
									})
								] })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: clients.map((c) => {
								const missed = stats.missedByClient[c.id] ?? 0;
								const fourh = stats.fourHByClient[c.id] ?? 0;
								const disc = (missed + fourh) * 25;
								const meeting = state.meetings[c.id]?.done;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "border-t border-border",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3 font-medium",
											children: c.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-3 text-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn(missed > 0 && "text-danger font-semibold"),
												children: missed
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-3 text-center",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: cn(fourh > 0 && "text-danger font-semibold"),
												children: fourh
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-3 py-3 text-center",
											children: meeting ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												className: "bg-success text-success-foreground",
												children: "Sim"
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												variant: "outline",
												children: "Pendente"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-5 py-3 text-right font-semibold",
											children: disc > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-danger",
												children: [
													"R$ ",
													disc,
													",00"
												]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-muted-foreground",
												children: "R$ 0"
											})
										})
									]
								}, c.id);
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tfoot", {
								className: "bg-muted/40 font-semibold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "px-5 py-3",
										children: "Total"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "text-center",
										children: stats.missed
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "text-center",
										children: stats.fourHFails
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "text-center",
										children: [
											stats.meetingsDone,
											"/",
											clients.length
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
										className: "px-5 py-3 text-right text-danger",
										children: [
											"R$ ",
											stats.totalDiscount,
											",00"
										]
									})
								] })
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between flex-wrap gap-2 mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-semibold",
					children: "Indicações & depoimentos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Marque quem indicou um novo cliente ou enviou depoimento neste mês."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "secondary",
						className: "gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gift, { className: "h-3 w-3" }),
							" ",
							stats.indications,
							" indicações"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "secondary",
						className: "gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquareQuote, { className: "h-3 w-3" }),
							" ",
							stats.testimonials,
							" depoimentos"
						]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-2",
				children: clients.map((c) => {
					const ex = state.clientExtras[c.id] ?? {};
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-4 shadow-[var(--shadow-card)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-semibold text-sm",
									children: c.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtraToggle, {
										active: !!ex.indication,
										onClick: () => toggleExtra(c.id, "indication"),
										icon: Gift,
										label: "Indicou"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExtraToggle, {
										active: !!ex.testimonial,
										onClick: () => toggleExtra(c.id, "testimonial"),
										icon: MessageSquareQuote,
										label: "Depoimento"
									})]
								})]
							}),
							ex.indication && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: "Quem foi indicado?",
								value: ex.indicationNote ?? "",
								onChange: (e) => setExtraNote(c.id, "indicationNote", e.target.value),
								className: "h-8 text-xs mb-2"
							}),
							ex.testimonial && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: "Onde/como foi enviado o depoimento?",
								value: ex.testimonialNote ?? "",
								onChange: (e) => setExtraNote(c.id, "testimonialNote", e.target.value),
								className: "h-8 text-xs"
							}),
							!ex.indication && !ex.testimonial && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground",
								children: "Nenhum registro neste mês."
							})
						]
					}, c.id);
				})
			})] })
		]
	});
}
function ExtraToggle({ active, onClick, icon: Icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: cn("inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors", active ? "bg-success text-success-foreground border-success" : "bg-background border-border text-muted-foreground hover:bg-muted"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-3 w-3" }), label]
	});
}
//#endregion
export { Dashboard as component };
