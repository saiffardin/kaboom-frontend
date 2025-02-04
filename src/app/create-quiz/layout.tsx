
import { QuizSidebar } from "@/components/pages/QuizSidebar/QuizSidebar"
import { SidebarProvider,  } from "@/components/ui/sidebar"
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
     
      <main className="w-full">
        {children}
      </main>
      <div className="hidden lg:block">
      <QuizSidebar/>
      </div>
    </SidebarProvider>
  )
}